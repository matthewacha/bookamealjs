import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {UserOrderView} from '../userOrderView';


describe('<UserOrderView/>', () => {
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
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'processing'
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a').simulate('click', unrealEvent)
    })

    it('loads succesfully',()=>{
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'ready'
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a').simulate('click', unrealEvent)
    })

    it('loads succesfully',()=>{
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'cancelled'
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('div.del-btn').simulate('click', unrealEvent)
    })

    it('loads succesfully',()=>{
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: 'today',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'delivered'
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('div.success-btn').simulate('click', unrealEvent)
    })

    it('loads succesfully',()=>{
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: '03 Sep 2018 20:28:08 ',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'processing',
            orderId:4
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('div#delete-button').simulate('click', unrealEvent)
    })

    it('loads succesfully',()=>{
        var userEditStatus= ()=> jest.genMockFunction()
        var getOrders= ()=> jest.genMockFunction()
        var order ={
            meal:{
            name: 'KFC',
            price:900},
            when: '03 Sep 2019 20:28:08 ',
            menu_name: 'King',
            caterer: 'Javas',
            status: 'processing',
            orderId:4
        }
        const unrealEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserOrderView order = { order } userEditStatus={ userEditStatus} getOrders={getOrders}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a').simulate('click', unrealEvent)
    })
})