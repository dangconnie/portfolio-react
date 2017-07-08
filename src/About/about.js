import React, { Component } from 'react';
// import './about.css';
import { IndexLink, Link } from 'react-router'


class About extends Component{
	render(){
		return(
			<div className="about">
				<h1>about me section </h1>
				<div className="col-sm-6 backgroundInfo">	
					<h3>Background</h3>
					<p></p>
				</div>
				<div className="col-sm-6 webDevInfo">
					<h3>Web Development</h3>
					<p>I'm an aspiring developer</p>
				</div>
			</div>
		)
	}
}

export default About;

