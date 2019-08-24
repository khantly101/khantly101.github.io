import React 		from 'react'
import Header 		from './components/header.js'
import About 		from './components/about.js'
import Solitaire 	from './components/solitaire.js'
import Fuel 		from './components/fuelapp.js'
import Sudoku 		from './components/sudoku.js'
import Mario 		from './components/mario.js'

import './App.css'

class App extends React.Component {

	render () {
		return (
			<div>
				<Header />
				<h1>About</h1>
				<div className='aboutContainer'>
					<About />
				</div>
				<h1>Projects</h1>
				<div className='projectsContainer'>
					<div className='projectsLeft'>
						<Solitaire />
						<Sudoku />
					</div>
					<div className='projectsRight'>
						<Fuel />
						<Mario />
					</div>
				</div>
			</div>
		)
	}
}

export default App
