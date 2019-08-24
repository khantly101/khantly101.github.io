import React 	from 'react'
import picture 	from '../Images/sudoku.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<img src={picture} alt='' />
				<div className='description'>
					<h3>Sudoku App</h3>
					<p>
						Sudoku playing app.
						<br />
						Built using React and Ruby on Rails
					</p>
					<a href='https://github.com/khantly101/sudoku-front-end'><button>GitHub</button></a>
					<a href='https://khantly101.github.io/sudoku-front-end/#/'><button>Demo</button></a>
				</div>
			</div>
		)
	}
}

export default Fuel