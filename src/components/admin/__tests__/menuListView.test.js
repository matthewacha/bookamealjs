import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import {MenuListView} from '../menuListView';


describe('<MenuListView/>', () => {
    it('loads succesfully',()=>{
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var funcMock= ()=> jest.genMockFunction()
        const fakeEvent = { preventDefault: () => jest.fn() };
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal}>
              <MenuListView menu = {'King'}GetMenu={funcMock} GetMenus={funcMock}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });

    wrapper.find('a').simulate('click', fakeEvent)
    expect(wrapper.find('a').text()).toBe('King');
    })
})