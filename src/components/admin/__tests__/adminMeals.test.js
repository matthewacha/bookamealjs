import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {MealList} from '../adminMeals';


describe('<MealList/>', () => {

    it('loads succesfully',()=>{
        var GetMeals= ()=> jest.genMockFunction()
        var EditMealState = {status:jest.genMockFunction()}
        var meals ={Meals:[{
            name: 'KFC',
            price:2300,
            id: '234'
        }]}
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealList MealsList = { meals } GetMeals = { GetMeals } EditMealState={EditMealState}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('MealView').exists()).toBe(true)
    })


    it('loads succesfully with error from fetch request',()=>{
        var GetMeals= ()=> jest.genMockFunction()
        var EditMealState = {status:jest.genMockFunction()}
        var meals ={Meals:[]}
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealList MealsList = { meals } GetMeals = { GetMeals } EditMealState={EditMealState}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div.no-meals').exists()).toBe(true)
    })

    it('loads succesfully with warning from fetch request',()=>{
        var GetMeals= ()=> jest.genMockFunction()
        var EditMealState = {status:jest.genMockFunction()}
        var meals ={Meals:[{warning:'Bad stuff'}]}
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealList MealsList = { meals } GetMeals = { GetMeals } EditMealState={EditMealState}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div.warning').text()).toBe('Bad stuff')
    })

    it('loads edit form on page',()=>{
        var GetMeals= ()=> jest.genMockFunction()
        var EditMealState = {status:true}
        var meals ={Meals:[{warning:'Bad stuff'}]}
        const getMealsEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <MealList MealsList = { meals } GetMeals = { GetMeals } EditMealState={EditMealState}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    expect(wrapper.find('div.warning').text()).toBe('Bad stuff')
    })
})