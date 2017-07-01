import React, { Component } from 'react';
// import './about.css';
import { IndexLink, Link } from 'react-router'
import backgroundImg from '../img/booksReading.jpg';

class Home extends Component{
	render(){
		return(
			<div className="background">
				<img src={backgroundImg} alt="" />
			</div>
			
		)
	}
}

export default Home;
