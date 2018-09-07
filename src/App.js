import React from 'react';
import Index from './components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import bookMeal from './store';
import history from './components/history';

export default class App extends React.Component {
    render () {
        return (
        <Provider store = {bookMeal} history = {history}>
                <BrowserRouter>
                        <Index/>
                </BrowserRouter>
        </Provider>)
        }
}

// App.propTypes = {
//         store:PropTypes.object.isRequired
// }

