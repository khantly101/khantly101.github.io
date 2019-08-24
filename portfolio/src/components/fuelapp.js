import React 	from 'react'
import picture 	from '../Images/Fuel.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='fuel'>
				<img src={picture} alt='' />
				<div className='description'>
					<h3>Fuel Logging App</h3>
					<p>
						Fuel Logging App for dispaying fuel usage and cost.
						<br />
						Built using Node.js, Mongoose, Express, ejs, and Google Maps Api.
					</p>
					<a href='https://github.com/khantly101/Project-2'><button>GitHub</button></a>
					<a href='https://secure-fortress-80109.herokuapp.com/main'><button>Demo</button></a>
				</div>
			</div>
		)
	}
}

export default Fuel