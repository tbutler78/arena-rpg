export const sellItem =  (item)  => ({

	type: 'SELL_ITEM',
	item

}) 


export const buyItem = (item) => ({

	type: 'BUY_ITEM',
	item		
	
})

export const equipItem = (item) => ({

	type: 'EQUIP_ITEM',
	item	

})

export const unequipItem = (item) => ({

	type: 'UNEQUIP_ITEM',
	item	

})