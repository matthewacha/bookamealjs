import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {UserMenuView} from '../userMenuView';


describe('<UserMenuCaterer/>', () => {
    beforeEach(function() {
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
        global.sessionStorage.getItem = jest.genMockFunction();
        var spy1 = sinon.spy(window.sessionStorage, "setItem");
        var stub1 = sinon.stub(window.sessionStorage, "getItem");
        var JSONData = {
            token: 'token'
        };
        stub1.returns(JSON.stringify(JSONData)); 
      
        spy1.calledWith('access_token', JSONData);


        
      });
    it('loads succesfully',()=>{
        var makeOrder= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var menuMeal ={
            mealNameame: 'chicken',
            mealPrice:3400
        }
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserMenuView menuMeal = { menuMeal } getOrders={ getOrders } makeOrder={makeOrder}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    wrapper.find('a').simulate('click', handleMenuEvent)
    // expect(wrapper.instance().getCatererMenu()).toBe(1);
    })
})