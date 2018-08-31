import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {AddMealForm} from '../addMealForm';

describe('<AddMealForm/>', () => {
    it('form loads successfully', () => {
        var PostMeal= ()=> jest.genMockFunction()
        var GetMeals= ()=> jest.genMockFunction()
        const editEvent = { preventDefault: () => jest.fn() };
        let  form= mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <AddMealForm store = {bookMeal} PostMeal={PostMeal} GetMeals={GetMeals}/>
                              </MemoryRouter>);
        form.find('form.form-inline').simulate('submit', editEvent)
        expect(form.find('form.form-inline').exists()).toEqual(true);

        });
})