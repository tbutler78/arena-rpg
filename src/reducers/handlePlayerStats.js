
//base statisicts - without bonus from attributes

const initialState = {
	
	attributes: {
		strength: 10,
		defense: 10,
		agility: 10,
		vitality: 10
	},
	attributePoints: 20,
	armor: 0,
	baseBlockChance: 0.05,
	baseDamage: [2, 4],
	baseHitChance: 0.5,
	blockChance: 0.1,
	damage: [2, 4],
	hitChance: 0.55

}

export const handlePlayerStats = (state = initialState, action) => {
	switch(action.type) {

		case 'EQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':
				case 'boots':
				case 'gloves':

					return {
						...state, 
						armor: state.armor + action.item.armor,
						baseHitChance: state.baseHitChance - action.item.hitChancePenalty
					}

				case 'weapons': 
					
					return {
						...state,
						baseDamage: action.item.dmgRange,
						baseHitChance: action.item.hitChance
					}
				default: 
					return state;

			}

		case 'UNEQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':
				case 'boots':
				case 'gloves':

					return {

						...state, 
							armor: state.armor - action.item.armor,
							baseHitChance: state.baseHitChance + action.item.hitChancePenalty
							
					}

				case 'weapons':
					return {
						
						...state,
						baseDamage: [2,4],
						baseHitChance: 0.5
					}
				default: 
					return state;
			}

		case 'INCREMENT_ATTRIBUTE':

			return {
				...state,
				attributes: {
					...state.attributes, [action.attribute]: state.attributes[action.attribute] + 1
				},
				attributePoints: state.attributePoints - 1

			}

		case 'CALCULATE_ATTRIBUTE_BONUS':

			return {
				...state,
				blockChance: state.baseBlockChance + (state.attributes.defense * 0.005),
				hitChance: state.baseHitChance + (state.attributes.agility * 0.005),
				damage: [state.baseDamage[0] * (1 + state.attributes.strength * 0.01), state.baseDamage[1] * (1 + state.attributes.strength * 0.01)]
			}

		default: 
			return state

	}
}

	