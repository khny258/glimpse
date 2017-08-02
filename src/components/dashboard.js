import React, { Component } from 'react';
import './dashboard.css';
import { Route, Link} from 'react-router-dom';
import CreateGroup from './createGroup.js';
// import Calendar from './containers/calendar.js';
class Dashboard extends Component {
	constructor(){
		super();
		this.state = {
			createGroup: false
		};
		this.showForm = this.showForm.bind(this);
	}

	showForm(){
		this.setState({
			createGroup: true
		});
	}

	hideForm = () => {
		this.setState({
			createGroup: false
		});
	}


render(){
	let groupForm = null;
		if(this.state.createGroup == true) {
			groupForm = <CreateGroup hideForm={this.hideForm} userID={this.props.userID}/>
		}

return (
<div className="mainDashboard">
	<div className="row" id="navBarRow">
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">	
					<a className="navbar-brand" id="logo" href="/">glimpse</a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav">
						<li><button className="btn btn-primary" id="groupButton" onClick={this.showForm}>Create a Group</button></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<form className="navbar-form pull-right">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Search for a Group" />
								</div>
								<button type="submit" className="btn btn-default">Find</button>
							</form></li>
							<li><button className="btn btn-primary" id="logOutButton" onClick={this.props._logout}><Link to="/" id="logOutButton"><span className="glyphicon glyphicon-log-in"></span>  Logout</Link></button></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

		<br />



				<div className="row" id="groupFormRow">
					<createGroupForm createGroup={this.state.createGroup}/>
					{groupForm}
				</div>

				<br /> <br /> <br /> <br />

				<div className="container-fluid text-left">
				<div className="row-inline content" id="calendarRow">
					<div className="col-lg-12">
						<i className="inline fa fa-calendar fa-2x" aria-hidden="true"></i>
						<h1 className="inline" id="calendars">Your Calendars</h1>
					</div>
				</div>

				<div className="row content" id="peaches">
				{this.props.groups.map((group, index) => 
					<div className="col-sm-2">
						<Link to="/calendar">
							<div className="panel panel-default" id="groupNameBox">
								<div className="panel-body" key={index}>
									{group.groupName}<br /> <br />
									<i>{group.groupDescription}</i>
								</div>
							</div>
						</Link>
					</div>)}
				</div>
			</div>

	<br/>

		
	
		

	
	

	{/*<div className="row" id="footerDashboard">
            <p id="footerPDashboard">Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
    </div>*/}
	
	
	
	
</div>
);
}
}
	export default Dashboard;