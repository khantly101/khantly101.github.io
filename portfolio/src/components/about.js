import React from 'react'
import picture 	from '../Images/IMG_0662.jpg'

import '../App.css'

class About extends React.Component {

	render () {
		return (
			<div className='row about valign-wrapper'>
				<img src={picture} alt='' className='responsive-img circle col s4' />
				<div className='col s8'>
					<h2 className='flow-text'>
						Hello, My name is Khan Ly
						<br />
						And I am A Full-Stack Developer
					</h2>
					<div className="card-panel blue lighten-2">
						<p className='flow-text black-text'> 
							I have strong skills in React and Javascript, 
							and I find great enjoyment using these technologies to create and build applications. 
							I have a tenacious personality, and I am focused on learning and growing as much as possible.
						</p>
					</div>
					<div className='contacts'>
						<h3 className='flow-text info'>Contact Info</h3>
						<div className="card-panel blue lighten-4">
							<p className='flow-text black-text'>
								Email: <a className='blue-text' href='mailto: khantuanly@gmail.com'>khantuanly@gmail.com</a>
							</p>
						</div>
					</div>
					<div className='links'>
						<a href='https://github.com/khantly101' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GitHub</button></a>
						<a href='https://www.linkedin.com/in/khan-ly/' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>linkedin</button></a>
						<a href='https://profiles.generalassemb.ly/profiles/khan-ly' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>GA Profile</button></a>
						<a href='https://drive.google.com/uc?export=download&id=1N5GTHqNaorSVm8gHf7iE73lNIFGRQrtK' target="_blank" rel="noopener noreferrer"><button className='btn white black-text'>Resume Download</button></a>
					</div>
				</div>
			</div>
		)
	}
}

export default About
