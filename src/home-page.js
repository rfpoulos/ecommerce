import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { generateCartId } from './vanilla';

let HomePageJSX = ({categories, dispatch}) =>
    <div>
        {
            categories.map(category =>
                <div className="product-tile">
                    <Link to={"/categories/" + category.title}>{category.title}</Link>
                    {category.products.map(product => 
                        <div>
                            <Link className="product-link" 
                                to={'/categories/' + category.title + '/' + product.title}>
                                {product.title}
                            </Link>
                            <div className="image-container">
                                <img src={product.images} />
                            </div>
                            <h5>{product.description}</h5>
                            <h4>Price ${product.price}</h4>
                            <button onClick={() => {
                                let currentProduct = Object.assign({}, product);
                                currentProduct.cartId = generateCartId();
                                dispatch({
                                type: 'ADD_TO_CART',
                                payload: currentProduct
                            })}
                            } >Add to Cart </button>
                        </div>
                    )}
                </div>
            )}
    </div>;


let mapStateToProps = (state) => {
    return { categories: state.categories };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageJSX);

export default HomePage;