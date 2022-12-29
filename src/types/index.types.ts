export type Request = {
	success: boolean
	currency: string
	timestamp: number
	items_list: Record<string, Item>
}

export type Item = {
	name: string
	marketable: number
	tradable: number
	classid: string
	icon_url: string
	icon_url_large: string | null
	type: string | null
	rarity: string
	rarity_color: string
	first_sale_date: string
	gun_type?: string
	souvenir?: number
	stattrak?: number
	knife_type?: string
}

export type Data = {
	item_name: string
	icon_url: string
	icon_url_large: string | null
	item_type: string | null
	rarity: string
	rarity_color: string
	name_color: string
}
