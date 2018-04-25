import React from 'react';
import ReactDOM from 'react-dom';

let updateUser = (state, action) =>
    ({...state, userName: action.payload});

updateUser.toString = () => 'UPDATE_USER';

let updateUserObject = (state, action) =>
    ({...state, userObject: action.payload});

updateUserObject.toString = () => 'UPDATE_USER_OBJECT';

let addToCart = (state, action) => {
    let addedItem = action.payload
    let totalItems = state.cart.concat([addedItem]);
    return {...state, cart: totalItems }
}

addToCart.toString = () => 'ADD_TO_CART';

let removeFromCart = (state, action) => {
    let removedItemId = action.payload
    let totalItems = state.cart.filter(item => item.cartId != removedItemId);
    return {...state, cart: totalItems }
}

removeFromCart.toString = () => 'REMOVE_FROM_CART';

let emptyCart = (state, action) =>
    ({...state, cart: [] });

emptyCart.toString = () => 'EMPTY_CART';

let reducerHandlers = {
    [updateUser]: updateUser,
    [addToCart]: addToCart,
    [removeFromCart]: removeFromCart,
    [emptyCart]: emptyCart
};

export default reducerHandlers;