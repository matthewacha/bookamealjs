import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {UserOrderList} from '../userOrders';


describe('<UserOrderList/>', () => {
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
        var getOrders= ()=> jest.genMockFunction()
        var userOrders ={
            Orders:[{
                meal:{name: 'chicken',price:3400,},
                when: 2345,
                menu_name:'Toasts'}]
        }
        // const handleOrderEvent = { preventDefault: () => console.log('preventDefault') };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderList userOrders = { userOrders } getOrders={ getOrders }/>
            </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    // wrapper.find('a').simulate('click', handleOrderEvent)
    expect(wrapper.find('.flex-container').exists()).toBe(true);
    })

    it('loads succesfully',()=>{
        var getOrders= ()=> jest.genMockFunction()
        var userOrders ={}
        // const handleOrderEvent = { preventDefault: () => console.log('preventDefault') };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderList userOrders = { userOrders } getOrders={ getOrders }/>
            </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    // wrapper.find('a').simulate('click', handleOrderEvent)
    expect(wrapper.find('.panel-body').exists()).toBe(true);
    })
})