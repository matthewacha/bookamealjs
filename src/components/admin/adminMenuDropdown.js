import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuListView from './menuListView';
import { GetMenus,GetMenu } from '../../actions/adminActions';
import AddMealForm from './addMealForm';

class AdminDropdown extends Component{
    // componentWillReceiveProps(mealsReturn){
	// 	if(mealsReturn!=='undefined'){
    //         console.log(this.props.MealsList);
    //         // if (mealsReturn.MealsList.message==="Unauthorized access, please login as admin"){
    //         //     this.props.history.push("/userDash");
    //         // }
    // }};
    
    componentWillMount=()=>{
        this.props.GetMenus();
    };    
   
    render(){
        const menus=this.props.MenusList;
        const CurrentMenu = this.props.menulist.Menu[0].name;
        console.log(CurrentMenu);
        let MenuListViews = menus.Menus.map((menu,index) => <MenuListView menu={menu} key={index} />);  
        return (
            <div>
               <div className="panel-heading" id = "menus-panel">
                        <div className="flex-container menu-admin">
                            <div className="dropdown" id="menus-dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Menu
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    {MenuListViews}
                                    <li><button>Add menu</button></li>
                                </ul>
                            </div>
                            <div id="menu-name"><h5>{CurrentMenu}</h5></div>
                            
                        </div>
                    </div> 
            </div>
        )
    }
}

AdminDropdown.propTypes = {
    admin:PropTypes.object,
    MenusList: PropTypes.object.isRequired,
    GetMenus:PropTypes.func.isRequired,
    GetMenu:PropTypes.func.isRequired,
    menulist:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    MenusList:state.admin.menusList,
    GetMenus:PropTypes.func.isRequired,
    GetMenu:PropTypes.func.isRequired,
    menulist:state.admin.menuList
});


export default withRouter(connect(mapStateToProps,{ GetMenus, GetMenu })(AdminDropdown));