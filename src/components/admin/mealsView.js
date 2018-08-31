import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DeleteMeal, GetMeals, AddToMenu,
    GetMenu, DeleteMenuMeal} from '../../actions/adminActions';
import { EditState } from '../../actions/helperActions';

export class MealView extends Component{
    onClickAddToMenu= (e) => {
        e.preventDefault();
        let menuName= {
            name:localStorage.getItem('CurrentMenu')
        };
        this.props.AddToMenu(this.props.meal.id, JSON.stringify(menuName));
        this.props.GetMeals();
        this.forceUpdate();
        
    }

    onClickDelete = (e) => {
        e.preventDefault();
        // Delete from menus
        let ListOfMenus = this.props.MenuNames.Menus
        ListOfMenus.forEach(menuName => {
            this.props.DeleteMenuMeal(this.props.meal.id, menuName)
            
        });
        // Delete from meals
        this.props.DeleteMeal(this.props.meal.id);
        
    }

    onClickEdit = (e) => {
        e.preventDefault();
        let data = {status:true,
            mealId:this.props.meal.id,
            mealName:this.props.meal.name,
            mealPrice:this.props.meal.price};
        this.props.EditState(data);
        
    }

    render(){
        let meal = this.props.meal;
        return (
            <tr>
                <td>{meal.name}</td>
                <td>{meal.price}</td>
                <td>
                    <div className="flex-container">
                        <div id="add-button" style={{padding:"10px 5px"}}><button onClick={this.onClickAddToMenu} className="add-btn" style={{float:"left"}}>add</button></div>
                        <div id="delete-button"> </div>
                        <div id="edi-button" style={{padding:"10px 5px"}}><button onClick={this.onClickEdit}  className="edi-btn" style={{float:"left"}}>edit</button></div>
                        <div id="delete-button" style={{padding:"10px 5px"}}><a ><button onClick={this.onClickDelete}  type="button" className="del-btn" style={{float:"left"}}>delete</button></a></div>
                    </div>
                </td>
            </tr>
        )
    }
}

MealView.propTypes = {
    meal:PropTypes.object.isRequired,
    EditState:PropTypes.func.isRequired,
    DeleteMeal:PropTypes.func.isRequired,
    GetMeals: PropTypes.func.isRequired,
    GetMenu: PropTypes.func.isRequired,
    AddToMenu:PropTypes.func.isRequired,
    menulist:PropTypes.object.isRequired,
    newMenuName:PropTypes.object.isRequired,
    DeleteMenuMeal: PropTypes.func.isRequired
};
 const mapStateToProps = state => ({
     DeleteMealMessage: state.admin.deleteMessage,
     AddToMenuMessage: state.admin.AddToMenuMessage,
     menulist: state.admin.menuList,
     MenuNames: state.admin.menusList,
     newMenuName: state.admin.newPendingMenu
 })
export default connect(mapStateToProps, { DeleteMeal, GetMeals, 
                                        AddToMenu, GetMenu, EditState, 
                                        DeleteMenuMeal})(MealView);