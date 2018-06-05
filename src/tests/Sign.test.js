import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../store';
import Signup from '../components/Signup';

describe('<Signup/>', () => {
    it('includes a title Sign up', () => {
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                  <Signup store = {bookMeal}/>
                              </MemoryRouter>);
        expect(signup.find('div.h2').text()).toEqual('Sign Up');

        });

    it('there are two input fields', () => {
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                    <Signup store = {bookMeal}/>
                                </MemoryRouter>);
        expect(signup.find('input.form-control').length).toEqual(2);

        });

    it('there are two labels', () => {
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                    <Signup store = {bookMeal}/>
                                </MemoryRouter>);
        expect(signup.find('label.label').length).toEqual(2);

        });

    it('check that component redirects', () => {
        let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                    <Signup store = {bookMeal}/>
                                </MemoryRouter>);
        expect(signup.find('button.submit-button').simulate('click',{target:{elements:{email:{value:"me@g.com"},password:{value:"animal"}}}}));
        //expect(signup).toMatchSnapshot();
        });

        it('check that navbar login button redirects', () => {
            let  signup = mount(<MemoryRouter initialEntries={['/']} initialIndex={0}>
                                        <Signup store = {bookMeal}/>
                                    </MemoryRouter>);
            expect(signup.find('a.nav-logo').simulate('click'));
            //expect(signup).toMatchSnapshot();
            });
    }
)