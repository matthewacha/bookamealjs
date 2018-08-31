import React from 'react';
import { render, mount } from 'enzyme';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import AdminDash from '../adminDash';


describe('<AdminDash/>', () => {

    beforeEach(function() {
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        // global.sessionStorage = jest.genMockFunction();
        // global.sessionStorage.setItem = jest.genMockFunction();
        // global.sessionStorage.getItem = jest.genMockFunction();
        // var spy1 = sinon.spy(window.sessionStorage, "setItem");
        // var JSONData = {
        //     Menus: ['monday', 'tuesday']
        // }
        // spy1.calledWith('menuItemList', JSONData)
        // var JSONData = {
        //     Menus: ['monday', 'tuesday']
        // };
        // var stub1 = sinon.stub(window.sessionStorage, "getItem");
        // stub1.returns(JSON.stringify(JSONData)); 
        
      })
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

    it('has order panel', () => {

        let  signup = render(<MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
                                    <AdminDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('div#orders-panel').text()).toEqual('Orders');

        });
    it('has a footer', () => {

        let  signup = render(<MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
                                    <AdminDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('footer').length).toEqual(1);

        });
    it('has a  get in touch in footer', () => {

        let  signup = render(<MemoryRouter initialEntries={['/AdminDash']} initialIndex={0}>
                                    <AdminDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('ul.quicklinks').length).toEqual(2);

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