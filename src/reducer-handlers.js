import React from 'react';
import ReactDOM from 'react-dom';

let updateUser = (state, action) =>
    ({...state, userName: action.payload});

updateUser.toString = () => 'UPDATE_USER';

let reducerHandlers = {
    [updateUser]: updateUser
    // [addToCart]: addToCart
};

export default reducerHandlers;