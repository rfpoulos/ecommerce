import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

let CartJSX = ({cart, dispatch}) =>
    <div>
        <h1>This is the Cart!</h1>
        {
            cart.map(item => 
                <div>{item.name}</div>)
        }
    </div>;

let mapStateToProps = (state) => {
    return { cart: state.cart };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartJSX);

export default Cart;