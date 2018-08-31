import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuView from './MenuView';
import { GetMenu } from '../../actions/adminActions';

export class MenuList extends Component{
    componentWillMount=()=>{
        const menuMeals = this.props.TheMenu;
        this.props.GetMenu(localStorage.getItem('CurrentMenu'))
        
    };
    
    AddMenuName = (e)=>{
        let menu = {
            name:e.target.elements.name.value
        };
        localStorage.setItem('CurrentMenu', menu.name)
    }

    DisplayMenus= (menuMeals, activeMenu) =>{
        if(menuMeals.message){
            return <tbody><tr><td><div className = "panel-body" > Start by selecting a menu...</div></td></tr></tbody>;
        }
        if(menuMeals.Menu){
            if(menuMeals.Menu[0].warning){
                return <tbody><tr><td><div className = "panel-body" > {menuMeals.Menu.warning}</div></td></tr></tbody>;
            }else{
            return <tbody>{menuMeals.Menu.map((menuMeal, index) => {
            return <MenuView menuMeal={menuMeal} key={index}/>})}</tbody>; }            
        }
        else if(activeMenu===undefined){
            return <tbody><tr><td><div className = "panel-body" > Start by selecting a menu...</div></td></tr></tbody>;
        }else {
            menuMeals.Menu.map((menuMeal, index) => {if(menuMeal.mealId!==null){return <tbody><MenuView menuMeal={menuMeal} key={index}/></tbody>}});}}
    

    render(){
        const menuMeals = this.props.TheMenu;

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
    GetMenu: PropTypes.func.isRequired,
    TheMenu: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    TheMenu: state.admin.menuList,
});


export default withRouter(connect(mapStateToProps,{ GetMenu })(MenuList));