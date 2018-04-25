import React from 'react';
import ReactDOM from 'react-dom';

import reducerHandlers from './reducer-handlers';

const initialState = {
    cart: [],
    currentProduct: {},
    userName: 'Sign In',
    userObject: {}
}

let fallback = (state, action) => state;

let reducer = (oldState = initialState, action) => {
    let babyReducer = reducerHandlers[action.type] || fallback;
    return babyReducer(oldState, action);
};

export default reducer;

