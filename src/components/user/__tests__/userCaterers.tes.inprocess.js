import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import bookMeal from '../../../utils/store';
import history from '../../../utils/history'
import {Caterers} from '../userCaterers';


describe('<SearchCaterer/>', () => {
    beforeEach(function() {
        global.sessionStorage = jest.genMockFunction();
        global.sessionStorage.setItem = jest.genMockFunction();
        global.sessionStorage.getItem = jest.genMockFunction();
        var spy1 = sinon.spy(window.sessionStorage, "setItem");
        var stub1 = sinon.stub(window.sessionStorage, "getItem");
        var JSONData = {
            token: 'token'
        };
        stub1.returns(JSON.stringify(JSONData)); 
      
        spy1.calledWith('access_token', JSONData);


        
      });
    it('loads succesfully',()=>{
        const getCatererEvent = { preventDefault: () => jest.fn() };
        const spy = sinon.spy()
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal}>
              <Caterers />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCaterer = jest.genMockFunction();

    wrapper.find('#caterers').simulate('submit', getCatererEvent)
    expect(wrapper.find('form').length).toBe(1);
    })


    it('loads succesfully with caterers',()=>{
        var caterers = {
            caterers:[
                {name:'Java',
                location:'KLA',
                phone:'980'}
            ]
        }
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal}>
              <Caterers caterers={ caterers } history={history}/>
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    // wrapper.instance().getCaterer = jest.genMockFunction();
    expect(wrapper.find('form').length).toBe(1);
    })

    it('loads succesfully with caterers',()=>{
        var caterers = {
            caterers:[]
        }
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal} history={history}>
              <Caterers caterers={ caterers } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    expect(wrapper.find('form').length).toBe(1);
    })

    it('loads succesfully with caterers',()=>{
        var caterers = {
            message:'Blah blah'
        }
        const wrapper = mount(<MemoryRouter >
            <Provider  store = {bookMeal}>
              <Caterers caterers={ caterers } />
        </Provider>
    </MemoryRouter>, {
        context: {store: bookMeal},
        childContextTypes: {store: PropTypes.object.isRequired}
    });
    expect(wrapper.find('td#no-return').text()).toBe('Search for caterers');
    })
})