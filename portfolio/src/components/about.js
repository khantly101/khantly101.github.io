import React from 'react'
import picture 	from '../Images/IMG_0662.jpg'

import '../App.css'

class About extends React.Component {

	render () {
		return (
			<div className='about'>
				<img src={picture} alt='' className='aboutPic'/>
				<div>
					<h2>
						Hello, My name is Khan Ly
						<br />
						And I am A Full-Stack Developer.
					</h2>
					<p> 
						I have strong skills in React and javascript where I find the most enjoyment creating and building from.
						I have a tenacious personality that eagerly tries to learn and grow as much as possible.
					</p>
					<div className='contacts'>
						<h3 className='link'>Contact Info</h3>
						<p>
							Email: <a href='mailto: khantuanly@gmail.com'>khantuanly@gmail.com</a>
						</p>
					</div>
					<div className='links'>
						<a href='https://github.com/khantly101'><button className='contentButton'>GitHub</button></a>
						<a href='https://www.linkedin.com/in/khan-ly/'><button className='contentButton'>linkedin</button></a>
					</div>
				</div>
			</div>
		)
	}
}

export default About
