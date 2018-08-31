import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCatererMenu } from '../../actions/adminActions';


export class CatererView extends Component{
    onClick = (e) => {
        e.preventDefault();
        let catererId = this.props.caterer.id;
        this.props.getCatererMenu(catererId);
        localStorage.setItem('caterer',this.props.caterer.name)
        
    }

    render(){
        let caterer = this.props.caterer;
        return (
            <tr style={{"width":"416.67px"}}>
                <td style={{"width":"39%"}}><a id="name"href="#" onClick={this.onClick} style={{"width":"100%"}}>{caterer.name}</a></td>
                <td style={{"width":"45%"}}><a href="#" onClick={this.onClick} style={{"width":"100%"}}>{caterer.location}</a></td>
                <td style={{"width":"25%"}}><a href="#" onClick={this.onClick} style={{"width":"100%"}}>{caterer.phone}</a></td>
            </tr>
            
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