import React, {Component} from 'react';
import '../App.css';
import storyTranslate from '../img/storyTranslatemini.png';
import upd8ed from '../img/upd8ed2.png';
import movieApp from '../img/movie.png';
import Button from 'react-bootstrap/lib/Button';
import FontAwesome from 'react-fontawesome';

class Projects extends Component{
	render(){
		return(
			<div className="projects-wrapper">
				<h2>Projects</h2>
				<div className="col-sm-12 project1">
					<div className="col-sm-6 screenshot">
						<img src={storyTranslate} alt="" />
					</div>
					<div className="col-sm-6 description">
						<h2>Translation Station</h2>
						<p>The Translation Station was built for <a href="https://newstorycharity.org/" target="__blank">New Story</a> administrators to upload, translate and review videos for their organization. New Story builds homes and communities for those in need providing a fresh approach to philanthropy. <strong> This is a full stack app designed for internal use only. The demo site username and password are "test" and "test".</strong></p>
						<Button href="http://dangconnie.com/new_story/#/login" target="__blank">Demo</Button>
						<Button href="https://github.com/dangconnie/Story-Translate" target="__blank" className="repoGithubLogo"><FontAwesome name='github'size="lg"/> Repo</Button>
						<hr />
						<div className="eachSkill">HTML/CSS</div>
						<div className="eachSkill">Sass/Materialize</div>
						<div className="eachSkill">Javascript</div>
						<div className="eachSkill">Angular</div>
						<div className="eachSkill">jQuery</div>
						<div className="eachSkill">Responsive Design</div>
						<div className="eachSkill">Agile Development</div>
					</div>
				</div>
				<div className="col-sm-12 project1">
					<div className="col-sm-6 description">
						<h2>Upd8ed</h2>
						<p>Upd8ed is a news aggregator built in React as a frontend project. This app pulls the latest business, entertainment, global, sports news from a variety of sources for the viewer from different APIs. </p>
						<Button href="http://dangconnie.com/upd8ed/#/" target="__blank">Demo</Button>
						<Button href="https://github.com/mason0958/News-Aggregator" target="__blank" className="repoGithubLogo"><FontAwesome name='github'size="lg"/> Repo</Button>
						<hr />
						<div className="eachSkill">HTML/CSS</div>
						<div className="eachSkill">Javascript</div>
						<div className="eachSkill">React</div>
						<div className="eachSkill">jQuery</div>
						<div className="eachSkill">Node.js</div>
						<div className="eachSkill">News API</div>
						<div className="eachSkill">OpenWeatherMap API</div>
						<div className="eachSkill">Yahoo! Finance API</div>
						<div className="eachSkill">Responsive Design</div>
						<div className="eachSkill">Agile Development</div>
					</div>
					<div className="col-sm-6 screenshot">
						<img src={upd8ed} alt="" />
					</div>
				</div>
					<div className="col-sm-12 project1">
					<div className="col-sm-6 screenshot">
						<img src={movieApp} alt="" />
					</div>
					<div className="col-sm-6 description">
						<h2>Popcorn Bits Cinema</h2>
						<p> Info about app</p>
						<Button href="http://dangconnie.com/movie-app/" target="__blank">Demo</Button>
						<Button href="https://github.com/dangconnie/movie-app" target="__blank" className="repoGithubLogo"><FontAwesome name='github'size="lg"/> Repo</Button>
						<hr />
						<div className="eachSkill">HTML/CSS</div>
						<div className="eachSkill">Javascript</div>
						<div className="eachSkill">jQuery</div>
						<div className="eachSkill">Bootstrap</div>
						<div className="eachSkill">The Movie Database API</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;