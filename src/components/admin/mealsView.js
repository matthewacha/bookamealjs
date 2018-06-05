import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DeleteMeal, GetMeals, AddToMenu, GetMenu } from '../../actions/adminActions';
import { EditState } from '../../actions/helperActions';

class MealView extends Component{
    circularStringify = (object) =>{
		let simpleObj={};
				for (let prop in object){
						if (!object.hasOwnProperty(prop)){
								continue;
						}
						if (typeof(object[prop]) === 'object'){
								continue;
						}
						simpleObj[prop] = object[prop];
				}
				return JSON.stringify(simpleObj)

	}

    onClickAddToMenu= (e) => {
        e.preventDefault();
        const CurrentMenu = this.props.menulist.Menu[0].name;
        let menuName= {
            menuName:CurrentMenu
        };
        this.props.AddToMenu(this.props.meal.id, JSON.stringify(menuName));
        this.props.GetMeals();
        this.props.GetMenu(CurrentMenu);
        this.forceUpdate();
        
    }

    onClickDelete = (e) => {
        e.preventDefault();
        this.props.DeleteMeal(this.props.meal.id);
        this.props.GetMeals();
        const CurrentMenu = this.props.menulist.Menu[0].name;
        this.props.GetMenu(CurrentMenu);
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
        let mealId = meal.id;
        return (
            <tbody>
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
            </tbody>
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
    menulist:PropTypes.object.isRequired
};
 const mapStateToProps = state => ({
     DeleteMeal:PropTypes.func.isRequired,
     DeleteMealMessage: state.admin.deleteMessage,
     AddToMenu:PropTypes.func.isRequired,
     AddToMenuMessage: state.admin.AddToMenuMessage,
     menulist:state.admin.menuList,
     EditState:PropTypes.func.isRequired
 })
export default connect(mapStateToProps, { DeleteMeal, GetMeals, AddToMenu, GetMenu, EditState })(MealView);