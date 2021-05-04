//4 combine the reducers using combineReducers()

import {combineReducers} from 'redux';
import {ProductReducer ,selectedProductReducer} from './productReducer';

const reducers = combineReducers({
  /* the kye */  allProducts: ProductReducer,
    product : selectedProductReducer,
});

export default reducers;