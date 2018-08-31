import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import CatererView from './catererView';
import { GetMeals } from '../../actions/adminActions';
import SearchCaterer from './searchCaterer';

export class Caterers extends Component{
    componentWillMount=()=>{
    };    
    NoCaterer = (caterers) => {
        if(caterers){
        if(caterers.message==='undefined'){this.props.history.push("/userDash");}
        else if(caterers.message){
            return <tr><td className = "panel-body" id="no-return">Search for caterers</td></tr>
            // this.props.history.push("/login");
        }
        else if(caterers.caterers.length===0){return <tr><td className = "panel-body" >Search for caterers</td></tr>}
        else { 
        return (caterers.caterers.map((caterer,index) => <CatererView caterer={caterer} key={index} />))
    }
}
        }
    render(){
        let caterers = this.props.caterers;
        return (
            <div>
                <div className="panel-heading admin-add-meal">
                        <SearchCaterer/>
                </div>
                <div className="panel-body panel-meals" >
                      <div className="content">
                      
                        <table className="menu" >
                         <tbody>
                              <tr>
                              <td style={{"width":"39%"}}>Caterer</td>
                              <td style={{"width":"45%"}}>Location</td>
                              <td style={{"width":"25%"}}>Contact</td>
                              </tr>
                         </tbody>
                         <tbody id="caterers">
                            {this.NoCaterer(caterers)}
                         </tbody>
                        </table>

                      
                      </div>
                  </div>
                  
            </div>
        )
    }
}

Caterers.propTypes = {
    admin:PropTypes.object,
}

const mapStateToProps = state =>({
    caterers:state.admin.caterers,
    GetMeals:PropTypes.func.isRequired,
    EditMealState: state.helper.editState
});


export default withRouter(connect(mapStateToProps,{ GetMeals })(Caterers));