import { PostMeal, EditMeal,GetMenu,GetMenus,GetMeals,
     DeleteMeal, DeleteMenuMeal, GetMeal, AddToMenu, adminEditStatus,
    userEditStatus, getAdminOrders, getOrders, makeOrder, getCatererMenu,
getCaterer, 
AddNewMenu} from '../adminActions';
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

    it('creates a meal', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var signdata = JSON.stringify({name:"ice cream", price:3400})
        fetchMock.post('http://127.0.0.1:5000/api/v2/meals/', {"message":"Successfully created"})
        const expectedActions = [
            {"message": {"message":"Successfully created"},
            "type":"ADD_MEAL"}]
        return store.dispatch(PostMeal(signdata)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('edit a meal', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        var signdata = JSON.stringify({name:"ice cream", price:3400})
        fetchMock.put(`http://127.0.0.1:5000/api/v2/meals/1`, {"message":"Successfully edited"})
        const expectedActions = [
            {"message": {"message":"Successfully edited"},
            "type":"EDIT_MEAL"}]
        return store.dispatch(EditMeal(signdata, 1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('delete a meal', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.delete(`http://127.0.0.1:5000/api/v2/meals/1`, {"message":"Successfully deleted"})
        const expectedActions = [
            {"message": {"message":"Successfully deleted"},
            "type":"DELETE_MEAL"}]
        return store.dispatch(DeleteMeal(1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('delete a menu meal', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.delete('http://127.0.0.1:5000/api/v2/menus/King/1', {"message":"Successfully deleted"})
        const expectedActions = [
            {"message": {"message":"Successfully deleted"},
            "type":"DELETE_MENU_MEAL"}]
        return store.dispatch(DeleteMenuMeal(1, 'King')).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('get a menu meal', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/meals/1', {"message":"Successfully returned"})
        const expectedActions = [
            {"payload": {"message":"Successfully returned"},
            "type":"GET_MEAL"}]
        return store.dispatch(GetMeal(1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('Add meal to menu', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.post('http://127.0.0.1:5000/api/v2/menus/1', {"message":"Successfully added"})
        const expectedActions = [
            {"message": {"message":"Successfully added"},
            "type":"ADD_TO_MENU"}]
        return store.dispatch(AddToMenu(1, "King")).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('get a menu', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/getmenus/King', {"message":"Successfully added"})
        const expectedActions = [
            {"payload": {"message":"Successfully added"},
            "type":"GET_MENU"}]
        return store.dispatch(GetMenu("King")).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('get menus', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/menus/', {"message":"Successfully added"})
        const expectedActions = [
            {"payload": {"message":"Successfully added"},
            "type":"GET_MENUS"}]
        return store.dispatch(GetMenus()).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('get meals', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/meals/', {"message":"Successfully returned"})
        const expectedActions = [
            {"mealsList": {"message":"Successfully returned"},
            "type":"FETCH_MEALS"}]
        return store.dispatch(GetMeals()).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('edit status works', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.put('http://127.0.0.1:5000/api/v2/order/admin_status/1', {"message":"Successfully returned"})
        const expectedActions = [
            {"userOrders": {"message":"Successfully returned"},
            "type":"ADMIN_EDIT_ORDERS"}]
        return store.dispatch(adminEditStatus(true, 1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('user edit status works', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.sessionStorage = mocklocalStorage
        fetchMock.put('http://127.0.0.1:5000/api/v2/order/user_status/1', {"message":"Successfully returned"})
        const expectedActions = [
            {"userOrders": {"message":"Successfully returned"},
            "type":"USER_EDIT_ORDERS"}]
        return store.dispatch(userEditStatus(true, 1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('admin get orders', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/getorder/admin', {"message":"Successfully returned"})
        const expectedActions = [
            {"Orders": {"message":"Successfully returned"},
            "type":"ADMIN_GET_ORDERS"}]
        return store.dispatch(getAdminOrders()).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('user get orders', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/orders', {"message":"Successfully returned"})
        const expectedActions = [
            {"userOrders": {"message":"Successfully returned"},
            "type":"GET_ORDERS"}]
        return store.dispatch(getOrders()).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('user posts orders', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.post('http://127.0.0.1:5000/api/v2/orders/1/2', {"message":"Successfully returned"})
        const expectedActions = [
            {"message": {"message":"Successfully returned"},
            "type":"MAKE_ORDER"}]
        return store.dispatch(makeOrder(1,2)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('user gets caterers menu', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/menus/1', {"message":"Successfully returned"})
        const expectedActions = [
            {"catererMenu": {"message":"Successfully returned"},
            "type":"GET_CATERER_MENU"}]
        return store.dispatch(getCatererMenu(1)).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

    it('user gets caterer', () => {
        const store = mockStore({})
        global.mocklocalStorage = jest.genMockFunction();
        const mocklocalStorage={
            getItem: jest.genMockFunction(),
            setItem: jest.genMockFunction()
        }
        global.localStorage = mocklocalStorage
        fetchMock.get('http://127.0.0.1:5000/api/v2/caterer/Java', {"message":"Successfully returned"})
        const expectedActions = [
            {"caterers": {"message":"Successfully returned"},
            "type":"GET_CATERER"}]
        return store.dispatch(getCaterer("Java")).then(()=> {
            const returnActions = store.getActions();
            expect(returnActions.length).toBe(1)
            expect(returnActions).toEqual(expectedActions)
        })
    })

})