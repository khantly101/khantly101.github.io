import React 	from 'react'
import picture 	from '../Images/sudoku.png'

import '../App.css'

class Sudoku extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<h2 className='flow-text'>Sudoku App</h2>
				<div class="card horizontal blue lighten-2">
					<div class="card-image">
						<img src={picture} alt='' />
					</div>
					<div class="card-stacked">
						<div class="card-content">
							<p className='flow-text black-text'>
								Simple Sudoku playing app.
								<br />
								Built with React for the front end and Ruby on Rails for the back end.
							</p>
						</div>
						<div class="card-action">
							<a href='https://github.com/khantly101/sudoku-front-end' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GitHub</button></a>
							<a href='https://khantly101.github.io/sudoku-front-end/#/' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>Demo</button></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Sudoku
