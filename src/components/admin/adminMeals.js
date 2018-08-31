import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import MealView from './mealsView';
import { GetMeals, PostMeal } from '../../actions/adminActions';
import AddMealForm from './addMealForm';
import EditMealForm from './editMealForm';

export class MealList extends Component{
    
    componentWillMount=()=>{
        if(this.props.MealsList.Meals){
            this.props.GetMeals();
        }
        if (this.props.MealsList.message==="Unauthorized access, please login as admin"){
            // this.props.history.push("/login");
        }
        this.props.GetMeals();
    };

    EditAdd = editCurrent=>{
        if(editCurrent.status===true){
            return (<EditMealForm/>);
        } else { 
            return <AddMealForm/>;}
        };

    NoMeals = (MealsAdded) => {
        if(MealsAdded.message){
            // this.props.history.push("/login");
            notify.show(MealsAdded.message, 'error');
        } else if(MealsAdded.Meals.length===0){
            return <div className = "panel-body no-meals" > No Meals Added</div>
        } else if(MealsAdded.Meals[0].warning){
            return <div className = "panel-body warning" >{MealsAdded.Meals[0].warning}</div>
        } else { 
            return <table className="menu" ><tbody>{MealsAdded.Meals.map((meal,index) => <MealView meal={meal} key={index} />)}</tbody></table>
        }
    }
    
    render(){
        const objects=this.props.MealsList;
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