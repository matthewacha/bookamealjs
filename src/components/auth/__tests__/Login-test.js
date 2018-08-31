import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FlushThunks } from 'redux-testkit';
import Login from '../Login';
import mainReducer from '../../../reducers';


describe('Sign up component', () => {
    let flushThunks, store;

    beforeEach(() => {
      jest.resetAllMocks();
      flushThunks = FlushThunks.createMiddleware();
      store = createStore(mainReducer, applyMiddleware(flushThunks, thunk));
    });

    it('should render without an error', () => {
        const wrapper = mount(<Login store={store}/>);
        expect(wrapper.find('form.login').exists()).toBe(true)
    })
    it('renders a password label', () => {
        expect(mount(<Login store={store}/>).find('label#password-label').text()).toBe('Password')
       })
    it('renders a password input', () => {
        expect(mount(<Login store={store}/>).find('#password').length).toBe(1)
       })
    it('renders an email label', () => {
    expect(mount(<Login store={store}/>).find('label#email-label').text()).toBe('Email')
    })
    it('renders an email input', () => {
    expect(mount(<Login store={store}/>).find('#email').length).toBe(1)
    })
    it('renders checkbox', () => {
        expect(mount(<Login store={store}/>).find('Checkbox').length).toBe(1)
    })
    it('renders checkbox text', () => {
        expect(mount(<Login store={store}/>).find('Checkbox').text()).toBe('Caterer')
    })
    it('renders navbar', () => {
        expect(mount(<Login store={store}/>).find('.navibar').length).toBe(1)
    })
    it('renders navbar correct links', () => {
        expect(mount(<Login store={store}/>).find('li#right-but').text()).toBe('Signup')
    })
    it('renders navbar correct links', () => {
        expect(mount(<Login store={store}/>).find('a.nav-log').text()).toBe('Book-A-Meal')
    })
    it('renders form title', () => {
        expect(mount(<Login store={store}/>).find('h2#title').text()).toBe('Login')
    })
      
})