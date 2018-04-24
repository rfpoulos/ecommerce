import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

let ProductJSX = ({match, cart, currentProduct, dispatch}) =>
    <div>
        <div>Product is {match.params.productName}</div>
        <button onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: currentProduct
        })} >Add to Cart </button>
    </div>;

let mapStateToProps = (state) => {
    return { cart: state.cart,
             currentProduct: state.currentProduct};
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Product = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductJSX);

export default Product;