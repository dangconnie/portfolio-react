import React, { Component } from 'react';
// import './about.css';
import Background from './background.js';
// import backgroundImg from '../img/booksReading.jpg';

// const backgroundImg = '../img/booksReading.jpg';

class Home extends Component{
	render(){
		return(
			<div className="background" src="url(${backgroundImg})">
				// <Background />

			</div>
		)
	}
}

export default Home;
