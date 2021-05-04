//2 Create the Actions 

import {ActionTypes} from '../constants/action-types';

//pass all the products 
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
};

// pass the product that is selected 
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

