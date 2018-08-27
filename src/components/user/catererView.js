import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCatererMenu } from '../../actions/adminActions';


class CatererView extends Component{
    onClick = (e) => {
        e.preventDefault();
        let catererId = this.props.caterer.id;
        this.props.getCatererMenu(catererId);
        sessionStorage.setItem('caterer',this.props.caterer.name)
        
    }

    render(){
        let caterer = this.props.caterer;
        return (
            <div>
            <tr style={{"width":"416.67px"}}>
            <a href="#" onClick={this.onClick} style={{"width":"100%"}}>
                <td style={{"width":"39%"}}>{caterer.name}</td>
                <td style={{"width":"45%"}}>{caterer.location}</td>
                <td style={{"width":"25%"}}>{caterer.phone}</td>
            </a>
            </tr>
            </div>
        )
    }
}


CatererView.propTypes = {
    getCatererMenu: PropTypes.func.isRequired,
};
 const mapStateToProps = state => ({
     DeleteMealMessage: state.admin.deleteMessage,
     AddToMenuMessage: state.admin.AddToMenuMessage,
     menulist: state.admin.menuList,
     MenuNames: state.admin.menusList,
     newMenuName: state.admin.newPendingMenu
 })
export default connect(mapStateToProps, { getCatererMenu })(CatererView);