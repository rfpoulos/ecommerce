import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { findProductByName } from './vanilla'
import products from './json/products'

let ProductJSX = ({match, cart, dispatch}) =>
    <div>
        <div>{match.params.categoryName} > {match.params.productName}</div>
        <div>Product is {match.params.productName}</div>
        <button onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: findProductByName(match.params.productName, products, cart)
        })} >Add to Cart </button>
    </div>;

let mapStateToProps = (state) => {
    return { cart: state.cart };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Product = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductJSX);

export default Product;