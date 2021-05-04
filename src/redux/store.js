//5 create the store and export it 
//6 import the store in index.js with the Provider
//7 create the components in the containers folder
import {createStore} from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers,{});
export default store;

