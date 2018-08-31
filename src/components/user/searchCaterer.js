import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCaterer } from '../../actions/adminActions';

class SearchCaterer extends Component{
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.getCaterer(e.target.elements.name.value);
    }
    render(){
        return (
            <div>
                <h3>Find caterer</h3>
                      <form className="form-inline" onSubmit={this.onSubmit}>
                          <div className="form-group">
                          <input type="text" name="name" className="form-control" id ="input-meal" placeholder="Search..." required/>
                          </div>
                      </form>
            </div>
        )
    }
}

SearchCaterer.propTypes = {
    getCaterer:PropTypes.func.isRequired,
};

const mapSateToProps= state => ({
    Caterer:PropTypes.func.isRequired,
})
export default connect(mapSateToProps, { getCaterer })(SearchCaterer);