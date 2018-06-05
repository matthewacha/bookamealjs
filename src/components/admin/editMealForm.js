import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EditMeal, GetMeals } from '../../actions/adminActions';
import { EditState } from '../../actions/helperActions';

class EditMealForm extends Component{
    onSubmit=(e)=>{
        e.preventDefault();
		let mealData = {
			name: e.target.elements.name.value,
            price:e.target.elements.price.value};
        this.props.EditMeal(JSON.stringify(mealData),this.props.EditMealState.mealId);
        this.props.GetMeals();
        let data = {status:false,mealId:this.props.EditMealState.mealId};
        this.props.EditState(data);
        console.log("editiing..");
    }
    render(){
        return (
            <div>
                <h3>Edit meal</h3>
                      <form className="form-inline" onSubmit={this.onSubmit}>
                          <div className="form-group">
                          <label className="sr-only" >New Meal name </label>
                          <input type="text" name="name" className="form-control" id ="input-meal" placeholder={this.props.EditMealState.mealName} required/>
                          </div>
                          <div className="form-group" id = "admin-price">
                          <label className="sr-only" >New Meal price </label>
                          <input type="integer" name="price" className="form-control" id ="input-meal" placeholder={this.props.EditMealState.mealPrice} required/>
                          </div><br/>
                          <button className="btn btn-default" id = "add-meal" type="submit">Edit</button>
                      </form>
            </div>
        )
    }
}

EditMealForm.propTypes = {
    EditMeal:PropTypes.func.isRequired,
    EditState:PropTypes.func.isRequired,
    GetMeals:PropTypes.func.isRequired
};

const mapSateToProps= state => ({
    EditMeal:PropTypes.func.isRequired,
    addMealMessage: state.admin.mealMessage,
    EditMealState: state.helper.editState
})
export default connect(mapSateToProps, { EditMeal, GetMeals, EditState })(EditMealForm);