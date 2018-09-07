import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealView from './mealsView';
import { GetMeals, PostMeal } from '../../actions/adminActions';
import AddMealForm from './addMealForm';
import EditMealForm from './editMealForm';

class MealList extends Component{
    // componentWillReceiveProps(mealsReturn){
    //     console.log(mealsReturn.MealsList);
    //     console.log(mealsReturn);
    //     if (mealsReturn.MealsList.message==="Unauthorized access, please login as admin"){
    //         this.props.history.push("/userDash");
    //     }
	// 	if(mealsReturn!=='undefined'){
    //         console.log(this.props.MealsList);
    //         if (mealsReturn.MealsList.message==="Unauthorized access, please login as admin"){
    //             this.props.history.push("/userDash");
    //         }
    // }
// };
    
    componentWillMount=()=>{
        // console.log(this.props.MealsList);
        if(this.props.MealsList.Meals){
            console.log(this.props.MealsList);
            this.props.GetMeals();
            console.log(this.props.MealsList);
            console.log(localStorage.getItem('access_token'),localStorage.getItem('K_access_token'));
        }
        // if (this.props.MealsList.message==="Unauthorized access, please login as admin"){
        //     this.props.history.push("/userDash");
        // }
        // this.props.GetMeals();
    };    
    EditAdd = editCurrent=>{
        if(editCurrent.status===true){return (<EditMealForm/>);}
        else{ return <AddMealForm/>;}};
    NoMeals = (MealsAdded) => {
        if(MealsAdded.message){console.log(MealsAdded.message);this.props.history.push("/userDash");}
        else if(MealsAdded.Meals.length===0){return <div className = "panel-body" > No Meals Added</div>}
        else if(MealsAdded.Meals[0].warning){return <div className = "panel-body" >{MealsAdded.Meals[0].warning}</div>}
        else { 
            return <table className="menu" >{MealsAdded.Meals.map((meal,index) => <MealView meal={meal} key={index} />)}</table>}}
    
    render(){
        const objects=this.props.MealsList;
        // console.log(objects);
        
        // let MealViews =objects.Meals.map((meal,index) => <MealView meal={meal} key={index} />); 
        return (
            <div>
                <div className="panel-body panel-meals">
                      <div className="content">
                      
                        {this.NoMeals(objects)}

                      
                      </div>
                  </div>
                  <div className="panel-heading admin-add-meal">
                      {this.EditAdd(this.props.EditMealState)}
                  </div>
            </div>
        )
    }
}

MealList.propTypes = {
    admin:PropTypes.object,
    MealsList: PropTypes.object.isRequired,
    EditMealState: PropTypes.object.isRequired,
    GetMeals:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    MealsList:state.admin.mealsList,
    GetMeals:PropTypes.func.isRequired,
    EditMealState: state.helper.editState
});


export default withRouter(connect(mapStateToProps,{ GetMeals })(MealList));