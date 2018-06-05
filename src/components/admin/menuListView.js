import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GetMenu, GetMenus } from '../../actions/adminActions';
class MenuListView extends Component{
    onClickMenu=(e)=>{
        e.preventDefault();
        this.props.GetMenu(this.props.menu);

    }

    componentWillMount=()=>{
        this.props.GetMenus(this.props.menu);
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

const mapStateToProps = state =>({
    GetMenu:PropTypes.func.isRequired,
    GetMenus:PropTypes.func.isRequired
})
export default connect(mapStateToProps, { GetMenu, GetMenus })(MenuListView);