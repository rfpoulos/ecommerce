import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { generateCartId } from './vanilla'

let ProductJSX = ({match, cart, categories, dispatch, product}) =>
    <div>
        <div>{match.params.categoryName} > {match.params.productName}</div>
        <div>Product is {match.params.productName}</div>
        <button onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })} >Add to Cart </button>
    </div>;

let mapStateToProps = (state, { match }) => {
    let categoryObject = state.categories.find(category =>
        category.title === match.params.categoryName);
    let product = {};
    if (categoryObject) {
        product = Object.assign({}, categoryObject.products.find(item => {
            return match.params.productName === item.title;
        }));
        product.cartId = generateCartId();
    }
    return { product,
             cart: state.cart,
             categories: state.categories };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Product = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductJSX);

export default Product;