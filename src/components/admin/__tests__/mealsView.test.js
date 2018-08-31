import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {MealView} from '../mealsView';


describe('<MealCaterer/>', () => {

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
        var funcMock= ()=> jest.genMockFunction()
        // var getOrders= ()=> jest.genMockFunction()
        var meal ={
            name: 'chicken',
            price:3400,
            id:2
        }
        var MenuNAmes ={
            Menus:['one', 'two']
        }
        // var EditState=()=> jest.genMockFunction()
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealView meal = { meal } DeleteMeal = {funcMock} EditState={ funcMock } GetMeals={funcMock} AddToMenu={funcMock}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    wrapper.find('button.add-btn').simulate('click', handleMenuEvent)
    // expect(wrapper.instance().getCatererMenu()).toBe(1);
    })

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
        var funcMock= ()=> jest.genMockFunction()
        // var getOrders= ()=> jest.genMockFunction()
        var meal ={
            name: 'chicken',
            price:3400,
            id:2
        }
        var MenuNAmes ={
            Menus:['one', 'two']
        }
        // var EditState=()=> jest.genMockFunction()
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealView meal = { meal } DeleteMeal = {funcMock} EditState={ funcMock } GetMeals={funcMock} AddToMenu={funcMock}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    wrapper.find('button.edi-btn').simulate('click', handleMenuEvent)
    // expect(wrapper.instance().getCatererMenu()).toBe(1);
    })

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
        var funcMock= ()=> jest.genMockFunction()
        // var getOrders= ()=> jest.genMockFunction()
        var meal ={
            name: 'chicken',
            price:3400,
            id:2
        }
        var MenuNames ={
            Menus:['one', 'two']
        }
        // var EditState=()=> jest.genMockFunction()
        const handleMenuEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealView MenuNames={MenuNames} meal = { meal } DeleteMeal = {funcMock} DeleteMenuMeal={funcMock} EditState={ funcMock } GetMeals={funcMock} AddToMenu={funcMock}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCatererMenu = jest.genMockFunction();

    wrapper.find('button.del-btn').simulate('click', handleMenuEvent)
    // expect(wrapper.instance().getCatererMenu()).toBe(1);
    })
})