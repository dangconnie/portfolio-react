import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import About from './About/about.js';
import Contact from './Contact/contact.js';
import Projects from './Projects/projects.js';
import Skills from './Skills/skills.js';

// import './compassSass.css';


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<Route path="/" component={About} />
			<Route path="/" component={Contact} />
			<Route path="/" component={Projects} />
			<Route path="/" component={Skills} />
		</Route>
	</Router>,
  document.getElementById('root')
);

