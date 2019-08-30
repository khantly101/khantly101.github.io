import React 	from 'react'
import picture 	from '../Images/Fuel.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='fuel'>
				<h2 className='flow-text'>Fuel Logging App</h2>
				<div class="card horizontal blue lighten-2">
					<div class="card-stacked">
						<div class="card-content">
							<p className='flow-text black-text'>
								Full Crud app for tracking fuel spending and consumption. 
								<br />
								Built with Express, EJS, Mongoose, MongoDB, Materialize, D3, and Google Maps API
							</p>
						</div>
						<div class="card-action">
							<a href='https://github.com/khantly101/Project-2' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GitHub</button></a>
							<a href='https://secure-fortress-80109.herokuapp.com/main/' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>Demo</button></a>
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

export default Fuel
