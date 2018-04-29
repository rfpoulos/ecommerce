import React from 'react';
import ReactDOM from 'react-dom';

let updateUserObject = (state, action) =>
    ({...state, userObject: action.payload});

updateUserObject.toString = () => 'UPDATE_USER_OBJECT';

let userSignIn = (state, action) =>
    ({...state, userSignIn: action.payload});

userSignIn.toString = () => 'USER_SIGN_IN';

let addToCart = (state, action) => {
    let addedItem = action.payload
    let totalItems = state.cart.concat([addedItem]);
    return {...state, cart: totalItems }
}

addToCart.toString = () => 'ADD_TO_CART';

let removeFromCart = (state, action) => {
    let removedItemId = action.payload
    let totalItems = state.cart.filter(item => item.cartId !== removedItemId);
    return {...state, cart: totalItems }
}

removeFromCart.toString = () => 'REMOVE_FROM_CART';

let emptyCart = (state, action) =>
    ({...state, cart: [] });

emptyCart.toString = () => 'EMPTY_CART';

let setAllProducts = (state, action) => 
    ({...state, allProducts: action.payload});

setAllProducts.toString = () => 'SET_ALL_PRODUCTS';

let setAllCategories = (state, action) => 
    ({...state, categories: action.payload});

setAllCategories.toString = () => 'SET_ALL_CATEGORIES';

let reducerHandlers = {
    [updateUserObject]: updateUserObject,
    [addToCart]: addToCart,
    [removeFromCart]: removeFromCart,
    [emptyCart]: emptyCart,
    [setAllProducts]: setAllProducts,
    [setAllCategories]: setAllCategories,
    [userSignIn]: userSignIn
};

export default reducerHandlers;