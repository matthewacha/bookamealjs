import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import { MenuList } from '../adminMenus';


describe('<MenuList/>', () => {

    it('loads succesfully',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        const sessionStorage={
            getItem:jest.genMockFunction(),
            setItem:jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        // global.sessionStorage = sessionStorage
        var GetMenu= ()=> jest.genMockFunction()
        var MenusList={
            Menu:[
            {mealNameame: 'chicken',
            mealPrice:3400},
            {mealNameame: 'beef',
            mealPrice:3400}]
        }
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MenuList TheMenu = { MenusList } GetMenu = { GetMenu } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('.panel-body').exists()).toBe(true)
    })


    it('loads succesfully with warning',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        const sessionStorage={
            getItem:jest.genMockFunction(),
            setItem:jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        // global.sessionStorage = sessionStorage
        var GetMenu= ()=> jest.genMockFunction()
        var MenusList={
            Menu:[{warning:'Something bad'}]
        }
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MenuList TheMenu = { MenusList } GetMenu = { GetMenu } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('.panel-body').exists()).toBe(true)
    })

    it('loads succesfully with no active menu',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        const sessionStorage={
            getItem:jest.genMockFunction(),
            setItem:jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var Activemenu = {Menu:[
            {mealNameame: 'chicken',
            mealPrice:3400}
        ]}
        // global.localStorage.setItem('CurrentMenu', Activemenu)
        // global.sessionStorage = sessionStorage
        var GetMenu= ()=> jest.genMockFunction()
        var MenusList={}
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MenuList TheMenu = { MenusList } GetMenu = { GetMenu } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('.panel-body').exists()).toBe(true)
    })

    it('loads succesfully with warning',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        const sessionStorage={
            getItem:jest.genMockFunction(),
            setItem:jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        // global.sessionStorage = sessionStorage
        var GetMenu= ()=> jest.genMockFunction()
        var MenusList={
            message:'Something bad'
        }
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MenuList TheMenu = { MenusList } GetMenu = { GetMenu } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('.panel-body').exists()).toBe(true)
    })

    it('loads succesfully with null meal id',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        const sessionStorage={
            getItem:jest.genMockFunction(),
            setItem:jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        // global.sessionStorage = sessionStorage
        var GetMenu= ()=> jest.genMockFunction()
        var MenusList={
            Menu:[
            {mealId:null,
            mealName: null,
            mealPrice:null},
            {mealName: 'beef',
            mealPrice:3400}]
        }
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MenuList TheMenu = { MenusList } GetMenu = { GetMenu } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('.panel-body').exists()).toBe(true)
    })
})