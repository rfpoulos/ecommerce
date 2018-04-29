import React from 'react';
import ReactDOM from 'react-dom';

import reducerHandlers from './reducer-handlers';

const initialState = {
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YW" +
            "UwY2U2YmY0YTlmZjAwMTQ2NjU3ZGYiLCJpZCI6IjVhZTBjZTZ" +
            "iZjRhOWZmMDAxNDY2NTdkZiIsImlhdCI6MTUyNDY4MjM0NywiZX" + 
            "hwIjoxNTI3Mjc0MzQ3fQ.rkunknfRGcMdXm_h98yoUjEcwDRa5z98MlJM9JHBA8U",
    cart: [],
    currentProduct: {},
    userObject: {user: {username: 'Sign In'}},
    userSignIn: {},
    categories: [],
    allProducts: []

}

let fallback = (state, action) => state;

let reducer = (oldState = initialState, action) => {
    let babyReducer = reducerHandlers[action.type] || fallback;
    return babyReducer(oldState, action);
};

export default reducer;

