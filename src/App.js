import React from 'react';
import Index from './components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import PropTypes from 'prop-types';
import bookMeal from './utils/store';
import history from './utils/history';

export default class App extends React.Component {
    render () {
            const superHistory = "pushState" in window.history
        return (
        <Provider store = {bookMeal} history = {history}>
                <BrowserRouter forceRefresh={superHistory}>       
                        <Index/>
                </BrowserRouter>
        </Provider>)
        }
}

// App.propTypes = {
//         store:PropTypes.object.isRequired
// }

