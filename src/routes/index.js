import React from 'react';
import {Route, withRouter } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import userDash from './userDash';

class Index extends React.Component{
    state = {
        message:undefined
    }
    circularStringify = (object) =>{
        let simpleObj={};
        for (let prop in object){
            if (!object.hasOwnProperty(prop)){
                continue;
            }
            if (typeof(object[prop]) === 'object'){
                continue;
            }
            simpleObj[prop] = object[prop];
        }
        return JSON.stringify(simpleObj)

    }

    signedUp = async (e) =>{
        e.preventDefault();
        let credentials = {
            email: e.target.elements.email.value,
        password:e.target.elements.password.value};

        const options = {
            method:'POST',
            body:this.circularStringify(credentials), 
            headers:{
                'Content-Type':'application/json'}};
       let result = await fetch(`http://127.0.0.1:5000/api/v2/auth/signup`,options);
       const data=await result.json(); 
       console.log(data);
        this.setState({
         message:data.message}   
        );
        let msg1 = this.state.message;
        let msg2 = "Successfully signed up";
        console.log(this);
        if (msg1.localeCompare(msg2)===0){
            this.props.history.push('/login');
        }
        };

    render(){
        
        return (
                    <div>
                    <Route path = "/" exact render = {(props) => <Signup  {...props} signedUp = {this.signedUp} />}/>
                    <Route path = "/signup" exact component = {Signup}/>
                    <Route path = "/login" exact component = {Login}/>
                    <Route path = "/userDash" exact component = {userDash}/>

                    </div>
                )
            }
}

export default withRouter(Index);