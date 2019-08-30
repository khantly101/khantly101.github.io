import React 	from 'react'
import picture 	from '../Images/mario.png'

import '../App.css'

class Mario extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<h2 className='flow-text'>3d Super Mario Bros Recreation</h2>
				<div class="card horizontal blue lighten-2">
					<div class="card-stacked">
						<div class="card-content">
							<p className='flow-text black-text'>
								3D Recreation of the first level of the original Super Mario Bros.
								<br />
								Built with Three.js to create the world and Physi.js to add physics and collision detection
							</p>
						</div>
						<div class="card-action">
							<a href='https://github.com/khantly101/3d_mario' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GitHub</button></a>
							<a href='https://khantly101.github.io/3d_mario/' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>Demo</button></a>
						</div>
					</div>
					<div class="card-image">
						<img src={picture} alt='' />
					</div>
				</div>
			</div>
		)
	}
}

export default Mario

