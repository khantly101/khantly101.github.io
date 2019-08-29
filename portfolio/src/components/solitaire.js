import React 	from 'react'
import picture 	from '../Images/solitaire.png'

import '../App.css'

class Solitaire extends React.Component {

	render () {
		return (
			<div className='solitaire'>
				<h2 className='link'>Solitaire App</h2>
				<img src={picture} alt='' />
				<div className='description'>
					<h3 className='link'>Links</h3>
					<a href='https://github.com/khantly101/Project-1'><button className='contentButton'>GitHub</button></a>
					<a href='https://khantly101.github.io/Project-1/'><button className='contentButton'>Demo</button></a>
					<h3 className='link'>Description</h3>
					<p>
						Solitaire Playing App.
						<br /> 
						Built using basic HTML, CSS, JQuery, and Jquery Ui
						<br />
						<br />
						My first major project, building a simple solitaire app using a deck of cards api
					</p>
				</div>
			</div>
		)
	}
}

export default Solitaire