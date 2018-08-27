import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuView extends Component {
    render (){
        const menumeal = this.props.menumeal;
        return (
            <tr>
                <td>{menumeal.mealName}</td>
                <td>{menumeal.price}<button className="add-btn">add</button></td>
            </tr>
            
        )
    }
   

};

MenuView.propTypes = {
	menumeal:PropTypes.object.isRequired
};

export default MenuView;



