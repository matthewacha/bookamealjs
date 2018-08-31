import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {EditMealForm} from '../editMealForm';

describe('<EditMealForm/>', () => {
    it('form loads successfully', () => {
        var EditMeal= ()=> jest.genMockFunction()
        var GetMeals= ()=> jest.genMockFunction()
        var EditState = ()=> jest.genMockFunction()
        const editEvent = { preventDefault: () => jest.fn() };
         var EditMealState = {
            mealNameame: 'chicken',
            mealPrice:3400,
            mealId:1}
        let  form= mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <EditMealForm store = {bookMeal} EditState={EditState} EditMealState={EditMealState} EditMeal={EditMeal} GetMeals={GetMeals}/>
                              </MemoryRouter>);
        form.find('form.form-inline').simulate('submit', editEvent)
        expect(form.find('form.form-inline').exists()).toEqual(true);

        });
})