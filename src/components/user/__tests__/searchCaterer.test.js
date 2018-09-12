import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {SearchCaterer} from '../searchCaterer';


describe('<SearchCaterer/>', () => {
    beforeEach(function() {
        global.sessionStorage = jest.fn();
        global.sessionStorage.setItem = jest.fn();
        global.sessionStorage.getItem = jest.fn();
        var spy1 = sinon.spy(window.sessionStorage, "setItem");
        var stub1 = sinon.stub(window.sessionStorage, "getItem");
        var JSONData = {
            token: 'token'
        };
        stub1.returns(JSON.stringify(JSONData)); 
      
        spy1.calledWith('access_token', JSONData);


        
      });
    it('loads succesfully',()=>{
        var getCaterer= ()=> jest.fn()
        const fakeEvent = { preventDefault: () => jest.fn() };
        // const spy = sinon.spy()
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal}>
              <SearchCaterer getCaterer={getCaterer}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCaterer = jest.fn();

    wrapper.find('.form-inline').simulate('submit',fakeEvent)
    expect(wrapper.find('form').length).toBe(1);
    })
})