import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.mocklocalStorage = jest.fn()
const mocklocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn()
};
global.localStorage = mocklocalStorage;
global.sessionStorage = mocklocalStorage;