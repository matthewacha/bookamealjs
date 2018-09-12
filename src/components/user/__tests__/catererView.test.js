import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {CatererView} from '../catererView';


describe('<SearchCaterer/>', () => {
    beforeEach(function() {
        global.mocklocalStorage = jest.fn();
        const mocklocalStorage={
            getItem: jest.fn(),
            setItem: jest.fn()
        }
        global.localStorage = mocklocalStorage

        
      });
    it('loads succesfully',()=>{
        var getCaterer= ()=> jest.fn()
        var caterer ={
            name: 'KFC',
            location:'Kla',
            phone: '234'
        }
        const getCatererMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <CatererView caterer = { caterer } getCatererMenu={ getCaterer }/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a#name').simulate('click', getCatererMenuEvent)
    })
})