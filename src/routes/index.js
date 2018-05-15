import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import userDash from './userDash';

export default () => (
    <BrowserRouter>
        <div>
        <Route path = "/" exact render = {props => <Signup {...props}/>}/>
        <Route path = "/signup" exact component = {Signup}/>
        <Route path = "/login" exact component = {Login}/>
        <Route path = "/userDash" exact component = {userDash}/>

        </div>
    </BrowserRouter>
);