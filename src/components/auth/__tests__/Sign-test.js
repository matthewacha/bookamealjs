import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FlushThunks } from 'redux-testkit';
import Signup from '../Signup';
import mainReducer from '../../../reducers';


describe('Sign up component', () => {
    let flushThunks, store;

    beforeEach(() => {
      jest.resetAllMocks();
      flushThunks = FlushThunks.createMiddleware();
      store = createStore(mainReducer, applyMiddleware(flushThunks, thunk));
    });

    it('should render without an error', () => {
        const wrapper = mount(<Signup store={store}/>);
        expect(wrapper.find('form.signup').exists()).toBe(true)
    })
    it('renders a password label', () => {
        expect(mount(<Signup store={store}/>).find('label#password-label').text()).toBe('Password')
       })
    it('renders a password input', () => {
        expect(mount(<Signup store={store}/>).find('#password').length).toBe(1)
       })
    it('renders an email label', () => {
    expect(mount(<Signup store={store}/>).find('label#email-label').text()).toBe('Email')
    })
    it('renders an email input', () => {
    expect(mount(<Signup store={store}/>).find('#email').length).toBe(1)
    })
    it('renders checkbox', () => {
        expect(mount(<Signup store={store}/>).find('Checkbox').length).toBe(1)
    })
    it('renders checkbox text', () => {
        expect(mount(<Signup store={store}/>).find('Checkbox').text()).toBe('Caterer')
    })
    it('renders navbar', () => {
        expect(mount(<Signup store={store}/>).find('.navibar').length).toBe(1)
    })
    it('renders navbar correct links', () => {
        expect(mount(<Signup store={store}/>).find('li#right-but').text()).toBe('Login')
    })
    it('renders navbar correct links', () => {
        expect(mount(<Signup store={store}/>).find('a.nav-log').text()).toBe('Book-A-Meal')
    })
    it('renders form title', () => {
        expect(mount(<Signup store={store}/>).find('h2#title').text()).toBe('Sign Up')
    })

    // it('signs up', async () => {
    //     var MockFetch  = require('mock-fetch-api');
 
    //     MockFetch.when('POST', 'http://127.0.0.1:5000/api/v2/auth/signup')
    //        .withExpectedHeader('Content-Type', 'application/json')
    //        .otherwiseRespondWith(401, "User already exists")
    //        .respondWith(200, '"Successfully signed up"');
      
    //     return fetch('http://127.0.0.1:5000/api/v2/auth/signup', { method: 'POST', headers: new Headers({
    //         'Content-Type':'application/json'
    //     })}).then((response) => {
    //        expect(response.status).toBe(200);
    //     });
    // })

    it('successfully submits form', () => {
        const historyMock = jest.fn();
        const wrapper = mount(<Signup store={store} history={historyMock}/>);
        wrapper.find('form').simulate('click',{ 
    preventDefault: () => {
    },
target:{elements:
    {email:
        {value:"me@mail.com"},
    password:
       {value: 'animal'},
    isadmin: {checked: 'true'}
    } }
    } )}  )
      
})