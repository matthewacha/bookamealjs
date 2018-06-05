import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetMeal, GetMenu, DeleteMenuMeal } from '../../actions/adminActions';

class MenuView extends Component{
    componentWillMount=()=>{
       let menuMeals = this.props.MealsList;
    //    this.props.GetMenu(localStorage.getItem('DefaultMenu'));
    }

    actualMealName = (mealID) => {
        let menuMeals = this.props.MealsList;
        let meal, result = menuMeals.Meals.map((menuMeal, index)=>{if(mealID===menuMeal.id){return menuMeal;}});
        for(meal of result){
            if(meal!==undefined){
                return meal.name;
            }
        }
    }

    actualMealPrice = (mealID) => {
        let menuMeals = this.props.MealsList;
        let meal, result = menuMeals.Meals.map((menuMeal, index)=>{if(mealID===menuMeal.id){return menuMeal;}});
        for(meal of result){
            if(meal!==undefined){
                return meal.price;
            }
        }
    }
    
    onClickDelete = (e) => {
        e.preventDefault();
        const CurrentMenu = this.props.menulist.Menu[0].name;
        this.props.DeleteMenuMeal(this.props.menuMeal.mealId,CurrentMenu);
        this.props.GetMenu(CurrentMenu);
        
        this.forceUpdate();
        console.log(this.props.TheMenu);
    }
    
    render(){
        let Meal = this.props.menuMeal;
        const MealName = this.actualMealName(this.props.menuMeal.mealId);
        const MealPrice = this.actualMealPrice(this.props.menuMeal.mealId);
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
    menulist: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    GetMeal:PropTypes.func.isRequired,
    GetMenu:PropTypes.func.isRequired,
    Meal: state.admin.Meal,
    MealsList:state.admin.mealsList,
    menulist:state.admin.menuList
});

export default connect(mapStateToProps, { GetMeal, GetMenu, DeleteMenuMeal })(MenuView);