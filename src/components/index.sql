/* @name updateItemData */
INSERT INTO items (item_name, icon_url, icon_url_large, item_type, rarity, rarity_color, name_color) 
VALUES (:item_name, :icon_url, :icon_url_large, :item_type, :rarity, :rarity_color, :name_color) 
ON CONFLICT (item_name) DO NOTHING;