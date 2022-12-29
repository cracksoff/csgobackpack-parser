/** Types generated for queries found in "src/components/index.sql" */
import { PreparedQuery } from '@pgtyped/query'

/** 'UpdateItemData' parameters type */
export interface IUpdateItemDataParams {
	icon_url: string | null | void
	icon_url_large: string | null | void
	item_name: string | null | void
	item_type: string | null | void
	name_color: string | null | void
	rarity: string | null | void
	rarity_color: string | null | void
}

/** 'UpdateItemData' return type */
export type IUpdateItemDataResult = void

/** 'UpdateItemData' query type */
export interface IUpdateItemDataQuery {
	params: IUpdateItemDataParams
	result: IUpdateItemDataResult
}

const updateItemDataIR: any = {
	usedParamSet: {
		item_name: true,
		icon_url: true,
		icon_url_large: true,
		item_type: true,
		rarity: true,
		rarity_color: true,
		name_color: true,
	},
	params: [
		{
			name: 'item_name',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 110, b: 119 }],
		},
		{
			name: 'icon_url',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 122, b: 130 }],
		},
		{
			name: 'icon_url_large',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 133, b: 147 }],
		},
		{
			name: 'item_type',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 150, b: 159 }],
		},
		{
			name: 'rarity',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 162, b: 168 }],
		},
		{
			name: 'rarity_color',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 171, b: 183 }],
		},
		{
			name: 'name_color',
			required: false,
			transform: { type: 'scalar' },
			locs: [{ a: 186, b: 196 }],
		},
	],
	statement:
		'INSERT INTO items (item_name, icon_url, icon_url_large, item_type, rarity, rarity_color, name_color) \nVALUES (:item_name, :icon_url, :icon_url_large, :item_type, :rarity, :rarity_color, :name_color) \nON CONFLICT (item_name) DO NOTHING',
}

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO items (item_name, icon_url, icon_url_large, item_type, rarity, rarity_color, name_color)
 * VALUES (:item_name, :icon_url, :icon_url_large, :item_type, :rarity, :rarity_color, :name_color)
 * ON CONFLICT (item_name) DO NOTHING
 * ```
 */
export const updateItemData = new PreparedQuery<
	IUpdateItemDataParams,
	IUpdateItemDataResult
>(updateItemDataIR)
