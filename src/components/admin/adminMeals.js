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
	// 	if(mealsReturn!=='undefined'){
    //         console.log(this.props.MealsList);
    //         // if (mealsReturn.MealsList.message==="Unauthorized access, please login as admin"){
    //         //     this.props.history.push("/userDash");
    //         // }
    // }};
    
    componentWillMount=()=>{
        this.props.GetMeals();
    };    
    EditAdd = editCurrent=>{
        if(editCurrent.status===true){return (<EditMealForm/>);console.log("editting first...");}
        else{ return <AddMealForm/>;}};
    render(){
        const objects=this.props.MealsList;
        console.log(objects);
        
        let MealViews =objects.Meals.map((meal,index) => <MealView meal={meal} key={index} />); 
        return (
            <div>
                <div className="panel-body panel-meals">
                      <div className="content">
                      <table className="menu" >
                        {MealViews}
                      </table>
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