import React 	from 'react'
import picture 	from '../Images/solitaire.png'

import '../App.css'

class Solitaire extends React.Component {

	render () {
		return (
			<div className='solitaire'>
				<h2 className='flow-text'>Solitaire App</h2>
				<div class="card horizontal blue lighten-2">
					<div class="card-image">
						<img src={picture} alt='' />
					</div>
					<div class="card-stacked">
						<div class="card-content">
							<p className='flow-text black-text'>
								Simple Solitaire playing app with timer and card back changing features.
								<br />
								Built with HTML, JQuery, JQuery UI, and Deck of cards API
							</p>
						</div>
						<div class="card-action">
							<a href='https://github.com/khantly101/Project-1' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GitHub</button></a>
							<a href='https://khantly101.github.io/Project-1/' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>Demo</button></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Solitaire