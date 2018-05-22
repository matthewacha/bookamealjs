import React from 'react';
import {Route, withRouter } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import userDash from './userDash';

class Index extends React.Component{
    render(){
        
        return (
                    <div>
                    <Route path = "/" exact render = {() => <Signup/>}/>
                    <Route path = "/signup" exact component = {Signup}/>
                    <Route path = "/login" exact component = {Login}/>
                    <Route path = "/userDash" exact component = {userDash}/>

                    </div>
                )
            }
}

export default withRouter(Index);