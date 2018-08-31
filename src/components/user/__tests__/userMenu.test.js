import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {UserMenu} from '../userMenu';
import menuListView from '../../admin/menuListView';


describe('<UserMenu/>', () => {
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
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var catererMenu ={
            Menu:[
            {mealNameame: 'chicken',
            mealPrice:3400},
            {mealNameame: 'beef',
            mealPrice:3400}]
        }
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserMenu catererMenu = { catererMenu }/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    expect(wrapper.find('UserMenuView').length).toBe(2);
    })

    it('loads succesfully with no menu selected',()=>{
        var catererMenu ={
            Menu:undefined
        }
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <UserMenu catererMenu = { catererMenu }/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    expect(wrapper.find('div#no-menu').text()).toBe(' Start by selecting a menu...');
    })

})