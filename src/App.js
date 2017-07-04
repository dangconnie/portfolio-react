import React, { Component } from 'react';
import './App.css';
import About from './About/about.js';
import Contact from './Contact/contact.js';
import Projects from './Projects/projects.js';
import Skills from './Skills/skills.js';
import Nav from './Nav/navbar.js';
import Home from './Home/home.js';


class App extends Component {
	render(){
		return(
			<div>
				<Home />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</div>
		)
	}
}
  
export default App;
