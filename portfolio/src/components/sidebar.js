import React from 'react'

import '../App.css'

class Side extends React.Component {

	render () {
		return (
			<div>
				 <ul id="slide-out" className="sidenav sidenav-fixed">
					<li><button className="waves-effect waves-light btn-large" onClick={this.props.showabout}>About</button></li>
					<li><button className="waves-effect waves-light btn-large" onClick={this.props.showSolitaire}>Solitaire</button></li>
					<li><button className="waves-effect waves-light btn-large" onClick={this.props.showfuel}>Fuel Tracker</button></li>
					<li><button className="waves-effect waves-light btn-large" onClick={this.props.showsudoku}>Sudoku</button></li>
					<li><button className="waves-effect waves-light btn-large" onClick={this.props.showmario}>3D Mario</button></li>
    			</ul>
			</div>
		)
	}
}

export default Side

			// <div className='side'>
			// 	<br />
			// 	<button className='sideButton' onClick={this.props.showabout}>About</button>
			// 	<button className='sideButton' onClick={this.props.showSolitaire}>Solitaire</button>
			// 	<button className='sideButton' onClick={this.props.showfuel}>Fuel Tracker</button>
			// 	<button className='sideButton' onClick={this.props.showsudoku}>Sudoku</button>
			// 	<button className='sideButton' onClick={this.props.showmario}>3D Mario</button>
			// </div>