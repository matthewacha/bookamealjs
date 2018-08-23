import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import Signup from './Signup';
import Login from './Login';
import UserDash from './userDash';
import adminDash from './admin/adminDash';
import AdminSign from './admin/adminSignup';
class Index extends React.Component{
    render(){
        
        return (
                    <div>
                        <Notifications />
                    <Route path = "/" exact render = {() => <Signup/>}/>
                    <Route path = "/signup" exact component = {Signup}/>
                    <Route path = "/login" exact component = {Login}/>
                    <Route path = "/userDash" exact component = {UserDash}/>
                    <Route path = "/adminDash" exact component = {adminDash}/>
                    <Route path = "/adminSignup" exact component = {AdminSign}/>

                    </div>
                )
            }
}

export default withRouter(Index);