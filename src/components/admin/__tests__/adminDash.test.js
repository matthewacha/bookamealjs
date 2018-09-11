import React from 'react';
import { render, mount } from 'enzyme';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import AdminDash from '../adminDash';


describe('<AdminDash/>', () => {
    it('includes a title AdminDash', () => {

        let  signup = render(
        <MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
            <Provider  store = {bookMeal} >
                <AdminDash/>
            </Provider>
        </MemoryRouter>, {context: {store: bookMeal},
                          childContextTypes: {store: PropTypes.object.isRequired}
                              });
        expect(signup.find('.navbar-brand').text()).toEqual('Book-A-Meal');

        });

    it('signout works', () => {
        var funcMock= ()=> jest.genMockFunction()
        const mockEvent = { preventDefault: () => jest.fn() };
        var history = {
            push:jest.fn()
        }

        let  signup = mount(<MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
                                    <AdminDash history = {history} store = {bookMeal} signOutUser={funcMock}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        signup.find('a#signout').simulate('click', mockEvent)
        expect(signup.find('#meals-panel').text()).toEqual('Meal Options');

        });

        it('settings modal works', () => {
            var funcMock= {open: jest.genMockFunction()}
            const mockEvent = { preventDefault: () => jest.fn() };
    
            let  signup = mount(<MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
                                        <AdminDash history = {history} store = {bookMeal} ModalManager={funcMock}/>
                                    </MemoryRouter>, {
                                        context: {store: bookMeal},
                                        childContextTypes: {store: PropTypes.object.isRequired}
                                    });
            signup.find('a#settings').simulate('click', mockEvent)
            expect(signup.find('#meals-panel').text()).toEqual('Meal Options');
    
            });
    }
    )