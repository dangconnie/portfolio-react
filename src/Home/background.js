import React, { Component } from 'react';
// import { IndexLink, Link } from 'react-router'
// import backgroundImg from '../img/booksReading.jpg';


class Background extends Component{
	render(){
		return(
			<div className="background">
				{/*{backgroundImg}*/}
				
				<div className="homeHeader"><h1>Hi, I'm Connie.</h1></div><hr/>
				<div className="homeHeader"><h3>I'm an aspiring developer.</h3></div>
			</div>
		)
	}
}

export default Background;