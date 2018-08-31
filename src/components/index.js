import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import Signup from './auth/Signup';
import Login from './auth/Login';
import UserDash from './user/userDash';
import AdminDash from './admin/adminDash';


class Index extends React.Component{
    render(){
        
        return (
                    <div>
                        <Notifications />
                    <Route path = "/" exact render = {() => <Signup/>}/>
                    <Route path = "/signup" exact component = {Signup}/>
                    <Route path = "/login" exact component = {Login}/>
                    <Route path = "/userDash" exact component = {UserDash}/>
                    <Route path = "/adminDash" exact component = {AdminDash}/>

                    </div>
                )
            }
}

export default Index;