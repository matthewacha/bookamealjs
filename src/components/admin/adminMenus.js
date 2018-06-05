import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuView from './MenuView';
import { GetMenu, GetMeal } from '../../actions/adminActions';

class MenuList extends Component{
    
    componentWillMount=()=>{
        this.props.GetMenu(localStorage.getItem('DefaultMenu'));
        const menuMeals = this.props.TheMenu;
    };
    AddMenuName = (e)=>{
        let menu = {
            name:e.target.elements.name.value
        };
        sessionStorage.setItem('NewMenu', menu.name);
    }

    render(){
        const menuMeals = this.props.TheMenu;

    let MenusView =menuMeals.Menu.map((menuMeal, index) => {if(menuMeal.mealId!==null){return <MenuView menuMeal={menuMeal} key={index}/>}}); 
        return (
            
            <div>
                
                <div className="panel-body panel-meals">
                      <div className="content">
                        <table className="menu" >
                            {MenusView}
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
    admin:PropTypes.object,
    OrdersList: PropTypes.object.isRequired,
    GetMenu:PropTypes.func.isRequired,
    TheMenu:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    TheMenu: state.admin.menuList,
    GetMenu:PropTypes.func.isRequired,
    GetMeal:PropTypes.func.isRequired
});


export default withRouter(connect(mapStateToProps,{ GetMenu })(MenuList));