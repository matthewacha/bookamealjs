import { signUp, logIn, signAdmin, loginAdmin, editAdminInfo } from '../credActions';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('tests authentication actions',() => {
    beforeEach(()=>{
        fetchMock.reset();
        fetchMock.restore();
    })
  it('calls signup request if fetch was successful',()=>{
    const store = mockStore({})
    var signdata = JSON.stringify({email:"me@mail.com", password:"12345678"})
    fetchMock.post('http://127.0.0.1:5000/api/v2/auth/signup', {"message":"Successfully signed up"})
    const expectedActions = [
        {"payload": {"message":"Successfully signed up"},
        "type":"SIGN_USER"}]
    return store.dispatch(signUp(signdata)).then(()=> {
        const returnActions = store.getActions();
        expect(returnActions.length).toBe(1)
        expect(returnActions).toEqual(expectedActions)

    })
  })

  it('calls login request if fetch was successful',()=>{
    const store = mockStore({})
    global.mocklocalStorage = jest.genMockFunction();
    const mocklocalStorage={
        getItem: jest.genMockFunction(),
        setItem: jest.genMockFunction()
    }
    global.localStorage = mocklocalStorage
    var signdata = JSON.stringify({email:"me@mail.com", password:"12345678"})
    fetchMock.post('http://127.0.0.1:5000/api/v2/auth/login', {"message":"Successfully logged in"})
    const expectedActions = [
        {"token": {"message":"Successfully logged in"},
        "type":"LOGIN_USER"}]
    return store.dispatch(logIn(signdata)).then(()=> {
        const returnActions = store.getActions();
        expect(returnActions.length).toBe(1)
        expect(returnActions).toEqual(expectedActions)

    })
  })

  it('calls signup admin request if fetch was successful',()=>{
    const store = mockStore({})
    var signdata = JSON.stringify({email:"me@mail.com", password:"12345678"})
    fetchMock.post('http://127.0.0.1:5000/api/v2/auth/admins', {"message":"Successfully signed up"})
    const expectedActions = [
        {"payload": {"message":"Successfully signed up"},
        "type":"ADMIN_SIGNUP"}]
    return store.dispatch(signAdmin(signdata)).then(()=> {
        const returnActions = store.getActions();
        expect(returnActions.length).toBe(1)
        expect(returnActions).toEqual(expectedActions)

    })
  })

  it('calls login admin request if fetch was successful',()=>{
    const store = mockStore({})
    global.mocklocalStorage = jest.genMockFunction();
    const mocklocalStorage={
        getItem: jest.genMockFunction(),
        setItem: jest.genMockFunction()
    }
    global.localStorage = mocklocalStorage
    var logindata = JSON.stringify({email:"me@mail.com", password:"12345678", isadmin:"true"})
    fetchMock.post('http://127.0.0.1:5000/api/v2/auth/adminLogin', {"token":"8726347kwejhbfv238fu"})
    const expectedActions = [
        {"token": {"token":"8726347kwejhbfv238fu"},
        "type":"ADMIN_LOGIN"}]
    return store.dispatch(loginAdmin(logindata)).then(()=> {
        const returnedActions = store.getActions();
        // expect(returnActions.length).toBe(1)
        expect(returnedActions).toEqual(expectedActions)

    })})

    it('calls login admin request if fetch was successful',()=>{
    const store = mockStore({})
    global.mocklocalStorage = jest.genMockFunction();
    const mocklocalStorage={
        getItem: jest.genMockFunction(),
        setItem: jest.genMockFunction()
    }
    global.localStorage = mocklocalStorage
    var logindata = JSON.stringify({email:"me@mail.com", password:"12345678", isadmin:"true"})
    fetchMock.post('http://127.0.0.1:5000/api/v2/auth/adminLogin', {"token":"8726347kwejhbfv238fu"})
    const expectedActions = [
        {"token": {"token":"8726347kwejhbfv238fu"},
        "type":"ADMIN_LOGIN"}]
    return store.dispatch(loginAdmin(logindata)).then(()=> {
        const returnedActions = store.getActions();
        // expect(returnActions.length).toBe(1)
        expect(returnedActions).toEqual(expectedActions)

        })
    })


    it('calls edit admin request if fetch was successful',()=>{
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var logindata = JSON.stringify({email:"me@mail.com", password:"12345678", isadmin:"true"})
        fetchMock.put('http://127.0.0.1:5000/api/v2/auth/manageAdmin', {"message":"Edited"})
        const expectedActions = [
            {"payload": {"message":"Edited"},
            "type":"ADMIN_EDIT"}]
        return store.dispatch(editAdminInfo(logindata)).then(()=> {
            const returnedActions = store.getActions();
            expect(returnedActions.length).toBe(1)
            expect(returnedActions).toEqual(expectedActions)
    
        })
    })
})


