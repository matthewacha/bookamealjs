import React from 'react';
import Index from './routes/index';
import { BrowserRouter } from 'react-router-dom';


export default () => {
    return (
        <BrowserRouter>
                <Index/>
        </BrowserRouter>)
};
