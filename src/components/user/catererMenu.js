import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserMenu from './userMenu';
import { GetMenus,GetMenu } from '../../actions/adminActions';

class CatererMenu extends Component{
    // componentWillReceiveProps(mealsReturn){
	// 	if(mealsReturn!=='undefined'){
    //         console.log(this.props.MealsList);
    //         // if (mealsReturn.MealsList.message==="Unauthorized access, please login as admin"){
    //         //     this.props.history.push("/userDash");
    //         // }
    // }};
    
    componentWillMount=()=>{
        // this.props.GetMenus();
    };

    CurrentMenu=(menuStuff)=>{
        console.log(menuStuff);
        return localStorage.getItem('CurrentMenu')
    }
   
    render(){
        // const menus=this.props.MenusList;
        // let MenuListViews = menus.Menus.map((menu,index) => <MenuListView menu={menu} key={index} />);  
        return (
            <div>
               <div className="panel-heading" id = "menus-panel">
                        <div className="flex-container menu-admin">
                            <div className="dropdown" id="menus-dropdown">
                                <ul className="text-center">
                                    {sessionStorage.getItem('caterer')}
                                </ul>
                            </div>
                        </div>
                </div> 
                <UserMenu/>
            </div>
        )
    }
}

CatererMenu.propTypes = {
    catererMeals: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
   catererMeals: state.admin.catererMenu,
});


export default withRouter(connect(mapStateToProps,{ GetMenus, GetMenu })(CatererMenu));