import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import { AdminDropdown } from '../adminMenuDropdown';


describe('<AdminDropdown/>', () => {

    it('loads succesfully',()=>{
        global.mocklocalStorage = jest.fn();
        const mocklocalStorage={
            getItem: jest.fn(),
            setItem: jest.fn()
        }
        global.localStorage = mocklocalStorage
        var GetMenus= ()=> jest.fn()
        var MenusList ={Menus:['one', 'two']}
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} >
              <AdminDropdown MenusList = { MenusList } GetMenus = { GetMenus } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired,
            GetMenus:PropTypes.func.isRequired}
    });

    expect(wrapper.find('MenuListView').exists()).toBe(true)
    })
})