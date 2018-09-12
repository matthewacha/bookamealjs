import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {OrderList} from '../adminOrders';


describe('<OrderList/>', () => {
    beforeEach(function() {
        global.localStorage = jest.fn();
        global.localStorage.setItem = jest.fn();
        global.localStorage.getItem = jest.fn();
        // var spy1 = sinon.spy(window.localStorage, "setItem");
        // var stub1 = sinon.stub(window.localStorage, "getItem");
        // var JSONData = {
        //     token: 'token'
        // };
        // stub1.returns(JSON.stringify(JSONData)); 
      
        // spy1.calledWith('access_token', JSONData);


        
      });
    it('loads succesfully with orders',()=>{
        var getAdminOrders= ()=> jest.fn()
        var history = {push:jest.fn()}
        var adminOrders ={
            Orders:[{
                meal:{name: 'chicken',price:3400,},
                customer:{name:'Jimmy'},
                menu_name:'Toasts'}]
        }
        // const handleOrderEvent = { preventDefault: () => console.log('preventDefault') };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <OrderList adminOrders = { adminOrders } getTotals={adminOrders} history={history} getAdminOrders={ getAdminOrders }/>
            </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    expect(wrapper.find('AdminOrderView').exists()).toBe(true);
    })

    it('loads succesfully with no orders',()=>{
        var spy1 = sinon.spy(window.localStorage, "setItem");
        var stub1 = sinon.stub(window.localStorage, "getItem");
        stub1.returns(null); 
        spy1.calledWith('access_token', null);
        var getAdminOrders= ()=> jest.fn()
        var history = {push:jest.fn()}
        var adminOrders ={}
        // const handleOrderEvent = { preventDefault: () => console.log('preventDefault') };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <OrderList adminOrders = { adminOrders } history={history} getAdminOrders={ getAdminOrders }/>
            </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.fn();

    // wrapper.find('a').simulate('click', handleOrderEvent)
    expect(wrapper.find('div#undefined').text()).toBe('Awaiting orders from your clients..');
    })
    // it('loads succesfully',()=>{
    //     var getOrders= ()=> jest.fn()
    //     var userOrders ={}
    //     // const handleOrderEvent = { preventDefault: () => console.log('preventDefault') };
    //     const wrapper = mount(<MemoryRouter >
    //         <Provider  store = {bookMeal} >
    //           <OrderList userOrders = { userOrders } getOrders={ getOrders }/>
    //         </Provider>
    // </MemoryRouter>, {
    //     context: {store: bookMeal},
    //     childContextTypes: {store: PropTypes.object.isRequired}
    // });
    // // wrapper.instance().getCatererMenu = jest.fn();

    // // wrapper.find('a').simulate('click', handleOrderEvent)
    // expect(wrapper.find('.panel-body').exists()).toBe(true);
    // })
})