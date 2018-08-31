import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserMenuView from './userMenuView';
import { GetMenu } from '../../actions/adminActions';

export class UserMenu extends Component{
    componentWillReceiveProps(realProp){
        // console.log(realProp);
		// if(singupMessage && singupMessage.user.message==="Successfully signed up"){
		// 	this.props.history.push("/login");
		// }
	};
    
    componentWillMount=()=>{
        // const menuMeals = this.props.TheMenu;
        // this.props.GetMenu(localStorage.getItem('CurrentMenu'))
        // this.props.GetActiveMenu()
        // if(this.props.TheMenu.Menu.warning){this.props.GetActiveMenu()}
        
    };
    
    // AddMenuName = (e)=>{
    //     let menu = {
    //         name:e.target.elements.name.value
    //     };
    //     localStorage.setItem('CurrentMenu', menu.name)
    // }

    DisplayMenus= (menuMeals) =>{
        if(menuMeals){  
        if(menuMeals.Menu){
            localStorage.setItem('menuItemList', JSON.stringify(menuMeals.Menu))
            return <tbody>{menuMeals.Menu.map((menuMeal, index) => {
                return <UserMenuView menuMeal={menuMeal} key={index}/>})}</tbody>;             
        }
        else if(menuMeals.Menu===undefined){
            return <tbody><tr><td><div className = "panel-body" id="no-menu" > Start by selecting a menu...</div></td></tr></tbody>;
        }else if(menuMeals.Menu){
            menuMeals.Menu.map((menuMeal, index) => {if(menuMeal.mealId!==null){return <tbody><UserMenuView menuMeal={menuMeal} key={index}/></tbody>}});}
        
        }else {
            // var menulist = JSON.parse(sessionStorage.getItem('menuItemList'));
            if(localStorage.getItem('menuItemList')!== undefined){
            var menuList = JSON.parse(localStorage.getItem('menuItemList'));
           if(menuList===null){
            return <tbody><tr><td><div className = "panel-body"  id="no-session"> Start by selecting a menu...</div></td></tr></tbody>;
            } else {
                return menuList.map((menuMeal, index) => {
                        return <tbody><UserMenuView menuMeal={menuMeal} key={index}/></tbody>});
                     } 
                    }
                        
        // } else {
        //     return menuList.map((menuMeal, index) => {
        //             return <tbody><UserMenuView menuMeal={menuMeal} key={index}/></tbody>}); }  
    
    }}
    

    render(){
        const menuMeals = this.props.catererMenu;
        return (
            
            <div>
                
                <div className="panel-body panel-meals" style={{"height":"405px"}}>
                      <div className="content">
                        <table className="menu" >
                            {this.DisplayMenus(menuMeals)}
                        </table>
                      </div>
                  </div>
                </div>
        )
    }
}

UserMenu.propTypes = {
    catererMenu: PropTypes.object
}


const mapStateToProps = state =>({
    catererMenu: state.admin.catererMenu,
});


export default withRouter(connect(mapStateToProps,{ GetMenu })(UserMenu));