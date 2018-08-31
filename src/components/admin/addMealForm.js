import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PostMeal, GetMeals } from '../../actions/adminActions';

export class AddMealForm extends Component{

    onSubmit=(e)=>{
        e.preventDefault();
		let mealData = {
			name: e.target.elements.name.value,
            price:e.target.elements.price.value};
        this.props.PostMeal(JSON.stringify(mealData));
        this.props.GetMeals();
    }
    render(){
        return (
            <div>
                <h3>Add meal</h3>
                      <form className="form-inline" onSubmit={this.onSubmit}>
                          <div className="form-group">
                          <label className="sr-only" >Meal name </label>
                          <input type="text" name="name" className="form-control" id ="input-meal" placeholder="meal name" required/>
                          </div>
                          <div className="form-group" id = "admin-price">
                          <label className="sr-only" >Meal price </label>
                          <input type="integer" name="price" className="form-control" id ="input-meal" placeholder="price" required/>
                          </div><br/>
                          <button className="btn btn-default" id = "add-meal" type="submit">Add</button>
                      </form>
            </div>
        )
    }
}

AddMealForm.propTypes = {
    PostMeal:PropTypes.func.isRequired,
    GetMeals:PropTypes.func.isRequired
};

const mapSateToProps= state => ({
    PostMeal:PropTypes.func.isRequired,
})
export default connect(mapSateToProps, { PostMeal, GetMeals })(AddMealForm);