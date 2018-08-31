import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuListView from './menuListView';
import { GetMenus } from '../../actions/adminActions';

export class AdminDropdown extends Component{
    componentWillMount=()=>{
        this.props.GetMenus();
    };

    CurrentMenu=()=>{
        return localStorage.getItem('CurrentMenu')
    }
    displayMenu= (menus) => {
        if(menus.Menus){
        return menus.Menus.map((menu,index) => <MenuListView menu={menu} key={index} />);
    }
    }
   
    render(){
        const menus=this.props.MenusList;  
        return (
            <div>
               <div className="panel-heading" id = "menus-panel">
                        <div className="flex-container menu-admin">
                            <div className="dropdown" id="menus-dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Menu
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu">
                                    { this.displayMenu(menus) } 
                                </ul>
                            </div>
                            <div id="menu-name"><h5> {this.CurrentMenu()}</h5></div>
                            
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
}

const mapStateToProps = state =>({
    MenusList:state.admin.menusList,
    GetMenus:PropTypes.func.isRequired,
});


export default withRouter(connect(mapStateToProps,{ GetMenus })(AdminDropdown));