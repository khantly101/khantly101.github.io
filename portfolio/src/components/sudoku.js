import React 	from 'react'
import picture 	from '../Images/sudoku.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<h2 className='link'>Sudoku App</h2>
				<img src={picture} alt='' />
				<div className='description'>
					<h3 className='link'>Links</h3>
					<a href='https://github.com/khantly101/sudoku-front-end'><button className='contentButton'>GitHub</button></a>
					<a href='https://khantly101.github.io/sudoku-front-end/#/'><button className='contentButton'>Demo</button></a>
					<h3 className='link'>Description</h3>
					<p>
						Sudoku playing app.
						<br />
						Built using React and Ruby on Rails
						<br />
						<br />
						A simple app for playing sudoku. Built so that an admin can add puzzles to the rails database and the end user can simply play Sudoku
					</p>
				</div>
			</div>
		)
	}
}

export default Fuel