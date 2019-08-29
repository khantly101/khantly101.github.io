import React 		from 'react'
import { Animate } 	from 'react-animate-mount'
import Side 		from './components/sidebar.js'
import Solitaire 	from './components/solitaire.js'
import Fuel 		from './components/fuelapp.js'
import Sudoku 		from './components/sudoku.js'
import Mario 		from './components/mario.js'
import About 		from './components/about.js'

import './App.css'

class App extends React.Component {
	state = {
		about: true,
		solitaire: false,
		fuel: false,
		sudoku: false,
		mario: false,
	}

	showSolitaire = () => {
		this.setState({
			about: false,
			fuel: false,
			sudoku: false,
			mario: false,
		},() => {
			this.setState({
				solitaire: true
			})
		})
	}

	showfuel = () => {
		this.setState({
			about: false,
			solitaire: false,
			sudoku: false,
			mario: false,
		},() => {
			this.setState({
				fuel: true
			})
		})
	}

	showsudoku = () => {
		this.setState({
			about: false,
			solitaire: false,
			fuel: false,
			mario: false,
		},() => {
			this.setState({
				sudoku: true
			})
		})
	}

	showmario = () => {
		this.setState({
			about: false,
			solitaire: false,
			fuel: false,
			sudoku: false,
		},() => {
			this.setState({
				mario: true
			})
		})
	}

	showabout = () => {
		this.setState({
			solitaire: false,
			fuel: false,
			sudoku: false,
			mario: false,
		},() => {
			this.setState({
				about: true
			})
		})
	}

	render () {
		return (
			<div className='container'>
				<div className='content'> 
					<Animate show={this.state.about} type='slide' duration='800'>
						<About />
					</Animate>
					<Animate show={this.state.solitaire} type='slide' duration='800'>
						<Solitaire />
					</Animate>
					<Animate show={this.state.fuel} type='slide' duration='800'>
						<Fuel />
					</Animate>
					<Animate show={this.state.sudoku} type='slide' duration='800'>
						<Sudoku />
					</Animate>
					<Animate show={this.state.mario} type='slide' duration='800'>
						<Mario />
					</Animate>
				</div>
				<Side showSolitaire={this.showSolitaire} showfuel={this.showfuel} showsudoku={this.showsudoku} showmario={this.showmario} showabout={this.showabout}/>
			</div>
		)
	}
}

export default App
