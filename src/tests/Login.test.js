import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../utils/store';
import Login from '../components/auth/Login';

describe('<Login/>', () => {
    it('includes a title Login', () => {
        let  login = mount(<MemoryRouter initialEntries={['/login']} initialIndex={0}>
                                  <Login store = {bookMeal}/>
                              </MemoryRouter>);
        expect(login.find('div.h2').text()).toEqual('Login');

        });

    it('there are two input fields', () => {
        let  login = mount(<MemoryRouter initialEntries={['/login']} initialIndex={0}>
                                  <Login store = {bookMeal}/>
                              </MemoryRouter>);
        expect(login.find('input#email').length).toEqual(1);

        });

    it('there are two labels', () => {
        let  login = mount(<MemoryRouter initialEntries={['/login']} initialIndex={0}>
                                  <Login store = {bookMeal}/>
                              </MemoryRouter>);
        expect(login.find('label.label').length).toEqual(2);

        });

    it('check that submit button redirects', () => {
        let  login = mount(<MemoryRouter initialEntries={['/login']} initialIndex={0}>
                                  <Login store = {bookMeal}/>
                              </MemoryRouter>);
        expect(login.find('button.submit-button').simulate('click',{target:{elements:{email:{value:"me@g.com"},password:{value:"animal"}}}}));

        });

        it('check that navbar login button redirects', () => {
            let  login = mount(<MemoryRouter initialEntries={['/login']} initialIndex={0}>
                                  <Login store = {bookMeal}/>
                              </MemoryRouter>);
            expect(login.find('a.nav-logo').simulate('click'));
            });

        it('test form submits', () => {
            sinon.stub(window, 'fetch')
            var res = new window.Response('{"hello":"world"}', {
                status: 200,
                headers: {
                    'Content-type': 'application/json'
                }
                });
            
            window.fetch.returns(Promise.resolve(res));
            const handleSubmitEvent = { preventDefault: () => jest.fn() };
            var loginAdmin = () => jest.fn()
            var login = () => jest.fn()
            let loginwrapper = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                        <Login store = {bookMeal} loginAdmin={loginAdmin} login={login}/>
                                    </MemoryRouter>);
            loginwrapper.find('form.login').simulate('submit', handleSubmitEvent);
            expect(login).toMatchSnapshot();
            });
    
    }
)