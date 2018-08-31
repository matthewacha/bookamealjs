import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetMenu, GetMenus } from '../../actions/adminActions';
export class MenuListView extends Component{
    onClickMenu=(e)=>{
        // return name of currently displayed menu
        e.preventDefault();
        localStorage.setItem('CurrentMenu', this.props.menu)
        this.props.GetMenu(this.props.menu);
        }

    componentWillMount=()=>{
        this.props.GetMenus();
    }


    render(){
        let menu = this.props.menu;
        return (
            
                <li><a href="#" onClick={this.onClickMenu}>{menu}</a></li>
            
        )
    }
}

MenuListView.propTypes = {
    menu:PropTypes.string.isRequired,
    GetMenu:PropTypes.func.isRequired,
    GetMenus:PropTypes.func.isRequired
};

export default connect(null, { GetMenu, GetMenus })(MenuListView);