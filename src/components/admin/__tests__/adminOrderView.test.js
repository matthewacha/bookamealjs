import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {AdminOrderView} from '../OrderView';


describe('<AdminOrderView/>', () => {
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
        var adminEditStatus= ()=> jest.genMockFunction()
        var getAdminOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            customer:{name: 'Javas'},
            status: 'processing'
        }
        const unrealEvent = { preventDefault: () => jest.fn()};
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a').simulate('click', unrealEvent)
    })

    it('loads shows its cancelled',()=>{
        var adminEditStatus= ()=> jest.genMockFunction()
        var getAdminOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            customer:{name: 'Javas'},
            status: 'cancelled'
        }
        const unrealEvent = { preventDefault: () => jest.fn()};
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div#cancelled').text()).toBe('cancelled')
    })
    
    it('loads shows its delivered status',()=>{
        var adminEditStatus= ()=> jest.genMockFunction()
        var getAdminOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            customer:{name: 'Javas'},
            status: 'delivered'
        }
        const unrealEvent = { preventDefault: () => jest.fn()};
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div#delivered').text()).toBe('delivered')
    })
  

    it('loads shows its ready',()=>{
        var adminEditStatus= ()=> jest.genMockFunction()
        var getAdminOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            customer:{name: 'Javas'},
            status: 'ready'
        }
        const unrealEvent = { preventDefault: () => jest.fn()};
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div#ready').text()).toBe('ready')
    })

    // it('loads succesfully',()=>{
    //     var adminEditStatus= ()=> jest.genMockFunction()
    //     var getAdminOrders= ()=> jest.genMockFunction()
    //     var order ={
    //         meal:{
    //         name: 'KFC',
    //         price:900},
    //         when: '03 Sep 2018 20:28:08 ',
    //         menu_name: 'King',
    //         caterer: 'Javas',
    //         status: 'processing',
    //         orderId:4
    //     }
    //     const unrealEvent = { preventDefault: () => console.log('not real') };
    //     const wrapper = mount(<MemoryRouter >
    //         <Provider  store = {bookMeal} >
    //           <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
    //     </Provider>
    // </MemoryRouter>, {
    //     context: {store: bookMeal},
    //     childContextTypes: {store: PropTypes.object.isRequired}
    // });

    // wrapper.find('div#delete-button').simulate('click', unrealEvent)
    // })

    // it('loads succesfully',()=>{
    //     var adminEditStatus= ()=> jest.genMockFunction()
    //     var getAdminOrders= ()=> jest.genMockFunction()
    //     var order ={
    //         meal:{
    //         name: 'KFC',
    //         price:900},
    //         when: '03 Sep 2019 20:28:08 ',
    //         menu_name: 'King',
    //         caterer: 'Javas',
    //         status: 'processing',
    //         orderId:4
    //     }
    //     const unrealEvent = { preventDefault: () => console.log('not real') };
    //     const wrapper = mount(<MemoryRouter >
    //         <Provider  store = {bookMeal} >
    //           <AdminOrderView order = { order } adminEditStatus={ adminEditStatus} getAdminOrders={getAdminOrders}/>
    //     </Provider>
    // </MemoryRouter>, {
    //     context: {store: bookMeal},
    //     childContextTypes: {store: PropTypes.object.isRequired}
    // });

    // wrapper.find('a').simulate('click', unrealEvent)
    // })
})