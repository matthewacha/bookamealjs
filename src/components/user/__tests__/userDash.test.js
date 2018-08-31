import React from 'react';
import { mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import UserDash from '../userDash';


describe('<UserDash/>', () => {

    beforeEach(function() {
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
      })
    it('includes a title UserDash', () => {

        let  signup = render(<MemoryRouter initialEntries={['/UserDash']} initialIndex={0}>
                                  <UserDash store = {bookMeal}/>
                              </MemoryRouter>, {
                                  context: {store: bookMeal},
                                  childContextTypes: {store: PropTypes.object.isRequired}
                              });
        expect(signup.find('p.navbar-text').text()).toEqual('Welcome');

        });

    it('has order panel', () => {

        let  signup = render(<MemoryRouter initialEntries={['/UserDash']} initialIndex={0}>
                                    <UserDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('div#orders-panel').text()).toEqual('My orders');

        });
    it('has a footer', () => {

        let  signup = render(<MemoryRouter initialEntries={['/UserDash']} initialIndex={0}>
                                    <UserDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('footer').length).toEqual(1);

        });
    it('has a  get in touch in footer', () => {

        let  signup = render(<MemoryRouter initialEntries={['/UserDash']} initialIndex={0}>
                                    <UserDash store = {bookMeal}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        expect(signup.find('ul.quicklinks').length).toEqual(2);

        });
    }
    )