import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

let CartJSX = ({cart, dispatch}) =>
    <div>
        <h1>This is the Cart!</h1>
        {
            cart.map(item => 
                <div className="cart-item">
                    <div>{item.title}</div>
                    <button onClick={
                        () => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: item.cartId
                        })
                        }>Remove Item</button>
                </div>)
        }
        <button onClick={ () =>
            dispatch({
                type: 'EMPTY_CART'
            })
        }>Empty Cart</button>
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