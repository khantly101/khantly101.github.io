import React 	from 'react'
import picture 	from '../Images/solitaire.png'

import '../App.css'

class Solitaire extends React.Component {

	render () {
		return (
			<div className='solitaire'>
				<img src={picture} alt='' />
				<div className='description'>
					<h3>Solitaire App</h3>
					<p>
						Solitaire Playing App.
						<br /> 
						Built using basic Html, css, JQuery, and Jquery Ui
					</p>
					<a href='https://github.com/khantly101/Project-1'><button>GitHub</button></a>
					<a href='https://khantly101.github.io/Project-1/'><button>Demo</button></a>
				</div>
			</div>
		)
	}
}

export default Solitaire