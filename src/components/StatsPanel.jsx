import React from 'react';
import { connect } from 'react-redux';
import { incrementAttribute, calculateAttributeBonus } from '../actions';


class StatsPanel extends React.Component {

	handleClick = (attr) => {
		this.props.incrementAttribute(attr);
		this.props.calculateAttributeBonus();
	}

		
	render() {
		const { attributes, armor, baseBlockChance, blockChance, baseDamage, damage, baseHitChance, hitChance, attributePoints, incrementAttribute, calculateAttributeBonus } = this.props;

		return (
			<div>
				{
					Object.keys(attributes).map((key, i) =>
							<p key={i} onClick={ attributePoints > 0 ? () => this.handleClick(key) : () => '' }>{`${key} : ${attributes[key]}`}</p>
					)
				}
				<p>Attribute Points: {attributePoints}</p>
				
				<p>Damage: {`${damage[0]} - ${damage[1]}`}</p>
				<p>Hit chance: {hitChance * 100}%</p>

				<p>Armor: {armor}</p>
				<p>Block chance: {blockChance * 100}%</p>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	attributes: state.handlePlayerStats.attributes,
	attributePoints: state.handlePlayerStats.attributePoints,
	baseDamage: state.handlePlayerStats.baseDamage,
	damage: state.handlePlayerStats.damage,
	armor: state.handlePlayerStats.armor,
	baseHitChance: state.handlePlayerStats.baseHitChance,
	hitChance: state.handlePlayerStats.hitChance,
	blockChance: state.handlePlayerStats.blockChance,
	baseBlockChance: state.handlePlayerStats.baseBlockChance,
	equipped: state.handleEquip.equipped
})

export default connect(mapStateToProps, {
	incrementAttribute, calculateAttributeBonus
})(StatsPanel)
