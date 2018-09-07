import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.mocklocalStorage = jest.genMockFunction();
const mocklocalStorage = {
  getItem: jest.genMockFunction(),
  setItem: jest.genMockFunction()
};
global.localStorage = mocklocalStorage;
global.sessionStorage = mocklocalStorage;