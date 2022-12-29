import type { Request, Item, Data } from '#app/types/index.types'
import { got, db, sleep } from '#app/utils/index.js'
import * as queries from '#app/components/index.queries.js'
import logger from '#app/utils/log.js'

enum NameColors {
	'Knife' = '8650AC',
	'Stattrak' = 'CF6A32',
	'Default' = 'D2D2D2',
	'Souvenir' = 'FFD700',
}

export const startParser = async (): Promise<void> => {
	while (true) {
		const data = await parser()
		const dataArray = Array.from(data)
		const promises = []

		for (const item of dataArray) {
			promises.push(
				queries.updateItemData.run(
					{
						item_name: item.item_name,
						icon_url: item.icon_url,
						icon_url_large: item.icon_url_large,
						item_type: item.item_type,
						rarity: item.rarity,
						rarity_color: item.rarity_color,
						name_color: item.name_color,
					},
					db,
				),
			)
		}
		await Promise.all(promises)

		logger.info('Parser finished')

		await sleep(1000 * 60 * 60)
	}
}

const parser = async (): Promise<Set<Data>> => {
	try {
		const weaponData: Request = await got({
			method: 'GET',
			url: 'http://csgobackpack.net/api/GetItemsList/v2/',
			responseType: 'json',
			resolveBodyOnly: true,
			searchParams: {
				details: true,
				no_prices: true,
				prettyprint: true,
			},
		})

		const data = new Set<Data>()
		const itemsList = weaponData.items_list

		for (const key in itemsList) {
			if (Object.prototype.hasOwnProperty.call(itemsList, key)) {
				const element = itemsList[key]
				if (!element) throw new Error('element variable in parser is undefined')

				if (element.type === 'Container') element.type = 'Case'

				const item: Data = {
					item_name: element.name,
					icon_url: element.icon_url,
					icon_url_large: element.icon_url_large,
					item_type: element.type,
					rarity: element.rarity,
					rarity_color: element.rarity_color.toUpperCase(),
					name_color: getColor(element),
				}

				data.add(item)
			}
		}

		return data
	} catch (error) {
		console.log(`Error in parser: ${error}`)
		throw error
	}
}

const getColor = (object: Item): string => {
	if (object.knife_type) {
		return NameColors.Knife
	} else if (object.souvenir) {
		return NameColors.Souvenir
	} else if (object.stattrak) {
		return NameColors.Stattrak
	} else {
		return NameColors.Default
	}
}

await startParser()
