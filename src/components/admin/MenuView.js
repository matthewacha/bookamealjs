import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetMeal, GetMenu, DeleteMenuMeal } from '../../actions/adminActions';

class MenuView extends Component{
    componentWillMount=()=>{
    //    console.log(this.props.MealsList);
    //    this.props.GetMenu(localStorage.getItem('DefaultMenu'));
    }

    actualMealName = (mealId) => {
        let menuMeals = this.props.MealsList;
        let meal, result = menuMeals.Meals.map((menuMeal)=>{if(mealId===menuMeal.id){return menuMeal;}});
        for(meal of result){
            if(meal!==undefined){
                return meal.name;
            }
        }
    }

    actualMealPrice = (mealId) => {
        let menuMeals = this.props.MealsList;
        let meal, result = menuMeals.Meals.map((menuMeal, index)=>{if(mealId===menuMeal.id){return menuMeal;}});
        for(meal of result){
            if(meal!==undefined){
                return meal.price;
            }
        }
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
            <tbody>
            <tr>
                <td>{MealName}</td>
                <td>{MealPrice}</td>
                <td>
                    <div className="flex-container">
                        <div id="delete-button" style={{padding:"10px 5px"}}><button onClick={this.onClickDelete} className="del-btn" style={{float:"left"}}>delete</button></div>
                    </div>
                </td>
            </tr>
            </tbody>
        )
    }
}


MenuView.propTypes = {
    Meal:PropTypes.object.isRequired,
    GetMeal:PropTypes.func.isRequired,
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