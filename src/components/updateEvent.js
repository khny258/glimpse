import React, { Component } from 'react';
// import './index.css';
import './createEvent_addUser.css';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';

class UpdateEvent extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			start: "",
			end: "",
			desc: ""
		}
		this.handleChange = this.handleChange.bind(this)	
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount () {
		console.log("index from url");
		console.log(this.props.match.url);
		this.setState({
			title: this.props.events[this.props.match.params.index].title,
			start: this.props.events[this.props.match.params.index].start,
			end: this.props.events[this.props.match.params.index].end,
			desc: this.props.events[this.props.match.params.index].desc
		});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault()
		axios
			.post('/group/updateEvent', {
				event: {
					title: this.state.title,
					start: this.state.start,
					end: this.state.end,
					desc: this.state.desc
				},
				id: this.props.currentGroup
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				// console.log("response id: " + response.data._id);
				if (!response.data.errmsg) {
					console.log('event added');
					this.props.hideUpdateEventForm();
					this.props.refreshEvent();
				} else {
					console.log('duplicate');
				}
			});
	}
	render(){
		return(
			<div className="row" id="createEventRow">
				<div className="col-lg-2"></div>
				<div className="col-lg-8">
					<div className="panel panel-default">
	  				<div className="panel-heading" id="createEventHeading">
	   					<h4 className="panel-title text-center" id="createEventTitle">update an event</h4>
	  				</div>
		  			<div className="panel-body" id="createEventPanel">
		     			<form className="form-inline text-center">
							<div className="form-group text-center createEventText">
								<label for="title">event name:</label>
								<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
		    				</div>
					
							<div className="form-group text-center createEventText">
								<label for="start">event begins (July 22, 2017 5:00 pm):</label>
								<input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
			    			</div>

			    			<div className="form-group text-center createEventText">
								<label for="end">end of event (July 22, 2017 9:00 pm):</label>
								<input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
			    			</div>

			    			<div className="form-group text-center createEventText">
								<label for="desc">description:</label>
								<textarea type="text" name="desc" value={this.state.desc} onChange={this.handleChange}/>
					    	</div>
		    			</form>
				    <button type="button" className="btn btn btn-primary actionButton center-block" id="createEventButton" onClick={this.handleSubmit}>create event</button>
		  	</div>
			</div>
			</div>
			<div className="col-lg-2"></div>
			</div>
		)
	}
}

export default UpdateEvent;