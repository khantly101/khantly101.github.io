import React 	from 'react'
import picture 	from '../Images/Fuel.png'

import '../App.css'

class Fuel extends React.Component {

	render () {
		return (
			<div className='fuel'>
				<h2 className='link'>Fuel Logging App</h2>
				<img src={picture} alt='' />
				<div className='description'>
					<h3 className='link'>Links</h3>
					<a href='https://github.com/khantly101/Project-2'><button className='contentButton'>GitHub</button></a>
					<a href='https://secure-fortress-80109.herokuapp.com/main/'><button className='contentButton'>Demo</button></a>
					<h3 className='link'>Description</h3>
					<p>
						Fuel Logging App for dispaying fuel usage and cost.
						<br />
						Built using Node.js, Mongoose, Express, ejs, materialize, and Google Maps Api.
						<br />
						<br />
						My first attempt at building a Full stack/Full crud app. Heavy use of materialize to build the front end.
					</p>
				</div>
			</div>
		)
	}
}

export default Fuel