import React from 'react';
import ReactDOM from 'react-dom';

let updateUser = (state, action) =>
    ({...state, userName: action.payload});

updateUser.toString = () => 'UPDATE_USER';

let addToCart = (state, action) => {
    let addedItem = action.payload
    let totalItems = state.cart.concat([addedItem]);
    return {...state, cart: totalItems }
}

addToCart.toString = () => 'ADD_TO_CART';

let updateProduct = (state, action) =>
    ({...state, currentProduct: action.payload});

updateProduct.toString = () => 'UPDATE_PRODUCT';

let reducerHandlers = {
    [updateUser]: updateUser,
    [addToCart]: addToCart,
    [updateProduct]: updateProduct
};

export default reducerHandlers;