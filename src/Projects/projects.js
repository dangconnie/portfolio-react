import React, {Component} from 'react';
import '../App.css';
import storyTranslate from '../img/storyTranslatemini.png';


class Projects extends Component{
	render(){
		return(
			<div className="projects-wrapper">
				<div className="col-sm-12 project1">
					<div className="col-sm-6 screenshot">
						<img src={storyTranslate} alt="" />
					</div>
					<div className="col-sm-6 description">
						All about this wonderful wonderful project
					</div>
				</div>
				<div className="col-sm-12 project1">
					<div className="col-sm-6 description">
						All about this wonderful wonderful project
					</div>
					<div className="col-sm-6 screenshot">
						<img src={storyTranslate} alt="" />
					</div>
				</div>
					<div className="col-sm-12 project1">
					<div className="col-sm-6 screenshot">
						<img src={storyTranslate} alt="" />
					</div>
					<div className="col-sm-6 description">
						All about this wonderful wonderful project
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;