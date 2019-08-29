import React 	from 'react'
import picture 	from '../Images/mario.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='sudoku'>
				<h2 className='link'>3d Super Mario Bros Recreation</h2>
				<img src={picture} alt='' />
				<div className='description'>
					<h3 className='link'>Links</h3>
					<a href='https://github.com/khantly101/3d_mario'><button className='contentButton'>GitHub</button></a>
					<a href='https://khantly101.github.io/3d_mario/'><button className='contentButton'>Demo</button></a>
					<h3 className='link'>Description</h3>
					<p>
						Recreating Super Mario Bros level 1-1 in 3d
						<br />
						Built Using Three.js and Physi.js
					</p>
				</div>
			</div>
		)
	}
}

export default Fuel