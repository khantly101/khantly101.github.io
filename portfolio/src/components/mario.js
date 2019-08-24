import React 	from 'react'
import picture 	from '../Images/mario.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<img src={picture} alt='' />
				<div className='description'>
					<h3>3d Super Mario Bros Recreation</h3>
					<p>
						Recreating Super Mario Bros level 1-1 in 3d
						<br />
						Built Using Three.js and Physi.js
					</p>
					<a href='https://github.com/khantly101/3d_mario'><button>GitHub</button></a>
					<a href='https://khantly101.github.io/3d_mario/'><button>Demo</button></a>
				</div>
			</div>
		)
	}
}

export default Fuel