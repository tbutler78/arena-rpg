import React from 'react';
import { connect } from 'react-redux';

import { unequipItem, calculateAttributeBonus } from '../actions';


class EquipPanel extends React.Component {

	handleClick = (el) => {
		this.props.unequipItem(el);
		this.props.calculateAttributeBonus(el);
	}

	render() {

		const { equipped, unequipItem, calculateAttributeBonus } = this.props;

		return (
			<div className="panel">
				{
					equipped.map((el, i) =>

						<div key={i} className='item-container'>
							<p onClick={() => this.handleClick(el)}>{`${el.name} ${el.quantity} ${i}`}</p>

						</div>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	equipped: state.handleEquip.equipped

})

export default connect(mapStateToProps, {
	unequipItem, calculateAttributeBonus
})(EquipPanel)
