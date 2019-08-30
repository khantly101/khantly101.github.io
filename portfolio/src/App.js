import React 		from 'react'
import Solitaire 	from './components/solitaire.js'
import Fuel 		from './components/fuelapp.js'
import Sudoku 		from './components/sudoku.js'
import Mario 		from './components/mario.js'
import About 		from './components/about.js'

import './App.css'

class App extends React.Component {

	componentDidMount() {
		document.title = "Khan Ly's Portfolio";
	}

	render () {
		return (
			<div className='container blue darken-3'>
				<About />
				<div>
					<h2 className='flow-text info projectsText'>Projects</h2>
					<Solitaire />
					<Fuel />				
					<Sudoku />
					<Mario />
				</div>
			</div>
		)
	}
}

export default App
