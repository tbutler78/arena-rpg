import * as actionTypes from '../constants/ActionTypes';

const initialState = { inventory: [] }

export const handleInventory = ( state = initialState, action ) => {
	switch(action.type) {	
		case actionTypes.BUY_ITEM:
		case actionTypes.UNEQUIP_ITEM:
			const addedItem = state.inventory.filter(
				item => item.id === action.item.id 
			);
			const addedIndex = state.inventory.map(
				(item) => item.id 
			).indexOf(action.item.id);
			return addedItem.length === 0
				?
				Object.assign({}, state, {
					inventory: [ ...state.inventory, { ...action.item, quantity : 1}],
				})
				:
				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[addedIndex] : {
							...action.item,
							quantity: ++addedItem[0].quantity
						}										
					}),
				})
		case actionTypes.SELL_ITEM:
		case actionTypes.EQUIP_ITEM:
			const removedIndex = state.inventory.map(
				item => item.id 
			).indexOf(action.item.id);			
			return action.item.quantity > 1 
				?
				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[removedIndex] : {
							...action.item,
							quantity: --action.item.quantity
						}										
					}),
				})				
				:
				{ 
					...state,  
					inventory: 
						[	...state.inventory.slice(0, removedIndex), 
							...state.inventory.slice(removedIndex + 1)
						] 
				}
		case actionTypes.END_GAME:
			return initialState			
		default:
			return state;
	}
}

export default handleInventory;


