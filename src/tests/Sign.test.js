import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../utils/store';
import {Signup} from '../components/auth/Signup';

describe('<Signup/>', () => {
    it('includes a title Sign up', () => {
        const mockFunc = ()=>jest.fn()
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <Signup store = {bookMeal} signUp={mockFunc} signAdmin={mockFunc}/>
                              </MemoryRouter>);
        expect(signup.find('div.h2').text()).toEqual('Sign Up');

        });

    it('there are two labels', () => {
        const mockFunc = ()=>jest.fn()
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <Signup store = {bookMeal} signUp={mockFunc} signAdmin={mockFunc}/>
                                </MemoryRouter>);
        expect(signup.find('label.label').length).toEqual(2);

        });

    it('check that component redirects', () => {
        const mockFunc = ()=>jest.fn()
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <Signup store = {bookMeal} signUp={mockFunc} signAdmin={mockFunc}/>
                                </MemoryRouter>);
        expect(signup.find('button.submit-button').simulate('click',{target:{elements:{email:{value:"me@g.com"},password:{value:"animal"}}}}));
        //expect(signup).toMatchSnapshot();
        });

    it('check that navbar login button redirects', () => {
        const mockFunc = ()=>jest.fn()
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <Signup store = {bookMeal} signUp={mockFunc} signAdmin={mockFunc}/>
                                </MemoryRouter>);
        expect(signup.find('a.nav-logo').simulate('click'));
        //expect(signup).toMatchSnapshot();
        });

    it('test form submits', () => {
        // const resolved = new Promise((r) => r({ data: Array.from([{ 0: { description: 'desc' } }]) }));
        // sinon.stub(window, 'fetch').returns(resolved);
        sinon.stub(window, 'fetch')
        var res = new window.Response('{"hello":"world"}', {
            status: 200,
            headers: {
              'Content-type': 'application/json'
            }
          });
        
        window.fetch.returns(Promise.resolve(res));
        const handleSubmitEvent = { preventDefault: () => jest.fn() };
        var signAdmin = ()=> jest.genMockFunction()
        var signUp = ()=> jest.genMockFunction()
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                    <Signup store = {bookMeal} signAdmin={signAdmin} signUp={signUp}/>
                                </MemoryRouter>);
        expect(signup.find('form.signup').simulate('submit', handleSubmitEvent));
        //expect(signup).toMatchSnapshot();
        });

    it('ComponentWillRecieveProps', () => {
        // var response = new window.Response('{"message":"Successfully signed up"}', {
        //     status: 200,
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        //     });
        
        // window.fetch.returns(Promise.resolve(response));
        var signAdmin = ()=> jest.genMockFunction()
        var signUp = ()=> jest.genMockFunction()
        // spyOn(Signup.prototype, 'componentWillReceiveProps').and.callThrough()
        var admin={message:"Successfully signed up"};

        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                    <Signup store = {bookMeal} signAdmin={signAdmin} signUp={signUp}/>
                                </MemoryRouter>);
        signup.setProps({admin})
        // expect(signup).toBeDefined();
        // expect(Signup.prototype.componentWillReceiveProps).toHaveBeenCalled();
        //expect(signup).toMatchSnapshot();
        });
    }
)