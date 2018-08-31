import React from 'react';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import AdminSettingsModal from '../adminSettingsModal';


describe('<AdminSettingsModal/>', () => {

    beforeEach(function() {
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage})
    

    it('form submits', () => {
        var funcMock= ()=> jest.fn()
        const mockEvent = { preventDefault: () => jest.fn() };

        let  signup = mount(<MemoryRouter initialEntries={['/AdminSettingsModal']} initialIndex={0}>
                                    <AdminSettingsModal history = {history} store = {bookMeal} editAdminInfo={funcMock}/>
                                </MemoryRouter>, {
                                    context: {store: bookMeal},
                                    childContextTypes: {store: PropTypes.object.isRequired}
                                });
        signup.find('form').simulate('submit', mockEvent)
        expect(signup.find('#phone').exists()).toEqual(true);

        });
    })