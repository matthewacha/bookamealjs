import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuView from './MenuView';
import { GetMenu, AddNewMenu } from '../../actions/adminActions';

class MenuList extends Component{
    componentWillReceiveProps(realProp){
		// if(singupMessage && singupMessage.user.message==="Successfully signed up"){
		// 	this.props.history.push("/login");
		// }
	};
    
    componentWillMount=()=>{
        const menuMeals = this.props.TheMenu;
        this.props.GetMenu(localStorage.getItem('CurrentMenu'))
        // this.props.GetActiveMenu()
        // if(this.props.TheMenu.Menu.warning){this.props.GetActiveMenu()}
        
    };
    
    AddMenuName = (e)=>{
        let menu = {
            name:e.target.elements.name.value
        };
        localStorage.setItem('CurrentMenu', menu.name)
    }

    DisplayMenus= (menuMeals, activeMenu) =>{
        console.log(menuMeals);
        if(menuMeals.message){
            return <tbody><tr><td><div className = "panel-body" > Start by selecting a menu...</div></td></tr></tbody>;
        }
        if(menuMeals.Menu){
            console.log(menuMeals.Menu);
            return menuMeals.Menu.map((menuMeal, index) => {
                    return <MenuView menuMeal={menuMeal} key={index}/>});             
        }
        else if(activeMenu.Menu===undefined){
            return <tbody><tr><td><div className = "panel-body" > Start by selecting a menu...</div></td></tr></tbody>;
        }else {
            menuMeals.Menu.map((menuMeal, index) => {if(menuMeal.mealId!==null){return <MenuView menuMeal={menuMeal} key={index}/>}});}}
    

    render(){
        const menuMeals = this.props.TheMenu;

    // let MenusView =menuMeals.Menu.map((menuMeal, index) => {if(menuMeal.mealId!==null){return <MenuView menuMeal={menuMeal} key={index}/>}}); 
        return (
            
            <div>
                
                <div className="panel-body panel-meals">
                      <div className="content">
                        <table className="menu" >
                            {this.DisplayMenus(menuMeals, localStorage.getItem('CurrentMenu'))}
                        </table>
                      </div>
                  </div>
                  <div className="panel-heading">
                  <form className="form-inline" onSubmit={this.AddMenuName} >
                          <div className="form-group">
                          <input type="text" name="name" className="form-control" id ="input-menu" placeholder="New menu" required/>
                          </div>
                          <button className="btn btn-default" id = "add-menu" type="submit">Add</button>
                    </form>
                    </div>
                </div>
        )
    }
}

MenuList.propTypes = {
    admin: PropTypes.object,
    OrdersList: PropTypes.object.isRequired,
    GetMenu: PropTypes.func.isRequired,
    TheMenu: PropTypes.object.isRequired,
    AddNewMenu: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    TheMenu: state.admin.menuList,
});


export default withRouter(connect(mapStateToProps,{ GetMenu, AddNewMenu })(MenuList));