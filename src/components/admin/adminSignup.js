import React from 'react';
import '../static/staticHome.css';
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../actions/credActions';
import { signAdmin, loginAdmin } from '../../actions/adminActions';

class AdminSign extends React.Component{
	// componentWillMount=()=>{
	// 	if (!sessionStorage.getItem('access_token')){
	// 		this.props.history.push("/login")
	// 	}
	// }

	componentWillReceiveProps(loginMessage){
        console.log(loginMessage);
		// if(loginMessage.userlog){
		// 	console.log(loginMessage.userlog.token);
		// 	sessionStorage.setItem('access_token',loginMessage.userlog.token);
		// 	this.props.signAdmin();//this is temporary just to debug admin dash,will be moved
		// 	// sessionStorage.setItem('K_access_token',this.props.adminlog.token);
		// 	// this.props.loginAdmin();
		// 	console.log(this.props);
		// 	// console.log(sessionStorage.getItem('access_token'),sessionStorage.getItem('K_access_token'));
		// 	//this.props.history.push("/adminDash");
		
	};

	onClick = (e)=>{
		e.preventDefault();
		console.log("Working..");
		this.props.loginAdmin();
		this.props.history.push("/adminDash")
	}

	onClickCancel = (e)=>{
		e.preventDefault();
		console.log("cancelling..");
		this.props.adminLogin;
	}
	render(){
		return(
    <div>
        <nav>
		<div className="navibar">
			<ul>
				<li><a className="nav-log" href="Signup">Book-A-Meal</a></li>
				<li id="right-but"><a className="nav-logo" href="Signup">Signup</a></li>
			</ul>
	     </div>
	</nav>
	
	<div className = "background">
					<div className="panel panel-default" id = "admin-sign">
                        <div className="panel-head">
							<div className="flex-container" id="admin-sign-req">
                            	<div id="admin-log-req"><h2>Log in as Admin?</h2></div>
								<div className="flex-container" id = "admin-buttons">
					        		<div id = "ok-button-admin"><button style={{align:"left"}} className='btn btn-primary' onClick={this.onClick}>Ok</button></div>
									<div id = "cancel-button-admin"><button style={{align:"right"}} className='btn btn-warning' onClick={this.onClickCancel}>No</button></div>
								</div>
							</div>
						</div>
					</div>
	</div>
	</div>
	)
}}


AdminSign.propTypes = {
	signAdmin:PropTypes.func.isRequired,
	loginAdmin:PropTypes.func.isRequired,
	adminlogin: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	userlog: state.user.loggedData,
	adminlogin: state.user.adminData
});

export default withRouter(connect(mapStateToProps,{ loginAdmin} )(AdminSign));