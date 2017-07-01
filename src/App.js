import React, { Component } from 'react';
import './App.css';
import About from './About/about.js';
import Contact from './Contact/contact.js';
import Projects from './Projects/projects.js';
import Skills from './Skills/skills.js';

class App extends Component {
	render(){
		return(
			<div>	
				<About />
				<Contact />
				<Projects />
				<Skills />
			</div>
		)
	}
}
  
export default App;
