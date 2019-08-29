import React from 'react'

import '../App.css'

class Side extends React.Component {

	render () {
		return (
			<div className='side'>
				<br />
				<button className='sideButton' onClick={this.props.showabout}>About</button>
				<br />
				<h3 className='sideTitle'>Projects</h3>
				<br />
				<button className='sideButton' onClick={this.props.showSolitaire}>Solitaire</button>
				<button className='sideButton' onClick={this.props.showfuel}>Fuel Tracker</button>
				<button className='sideButton' onClick={this.props.showsudoku}>Sudoku</button>
				<button className='sideButton' onClick={this.props.showmario}>3D Mario</button>
			</div>
		)
	}
}

export default Side
