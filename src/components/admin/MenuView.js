import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../../utils/history';
import { GetMeal, GetMenu, DeleteMenuMeal } from '../../actions/adminActions';

export class MenuView extends Component{
    componentWillMount=()=>{
    }

    actualMealName = (mealId) => {
        let menuMeals = this.props.MealsList;
        if(menuMeals.Meals===undefined){
            // history.push("/login");
        }else{
            let meal, result = menuMeals.Meals.map((menuMeal)=>{if(mealId===menuMeal.id){return menuMeal;}});
            for(meal of result){
                if(meal!==undefined){
                    return meal.name;
                }
            }
        }
    }

    actualMealPrice = (mealId) => {
        let menuMeals = this.props.MealsList;
        if(menuMeals.Meals===undefined){
            // history.push("/login");
        }else{
    
        let meal, result = menuMeals.Meals.map((menuMeal, index)=>{if(mealId===menuMeal.id){return menuMeal;}});
        for(meal of result){
            if(meal!==undefined){
                return meal.price;
            }
        }}
    }
    
    onClickDelete = (e) => {
        e.preventDefault();
        const CurrentMenu = this.props.menulist.Menu[0].name;
        this.props.DeleteMenuMeal(this.props.menuMeal.meal_id, CurrentMenu);
        this.props.GetMenu(CurrentMenu);
        
        this.forceUpdate();
    }
    
    render(){
        var MealName = this.actualMealName(this.props.menuMeal.meal_id);
        var MealPrice = this.actualMealPrice(this.props.menuMeal.meal_id);

        return (
            <tr>
                <td>{MealName}</td>
                <td>{MealPrice}</td>
                <td>
                    <div className="flex-container">
                        <div id="delete-button" style={{padding:"10px 5px"}}><button onClick={this.onClickDelete} className="del-btn" style={{float:"left"}}>delete</button></div>
                    </div>
                </td>
            </tr>
        )
    }
}


MenuView.propTypes = {
    Meal:PropTypes.object,
    GetMeal:PropTypes.func,
    MealsList:PropTypes.object.isRequired,
    GetMenu: PropTypes.func.isRequired,
    DeleteMenuMeal: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    GetMeal:PropTypes.func.isRequired,
    GetMenu:PropTypes.func.isRequired,
    Meal: state.admin.Meal,
    MealsList:state.admin.mealsList,
    menulist: state.admin.menuList
});

export default connect(mapStateToProps, { GetMeal, GetMenu, DeleteMenuMeal })(MenuView);