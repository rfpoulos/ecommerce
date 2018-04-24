import React from 'react';
import ReactDOM from 'react-dom';
import products from './json/products'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { filterProductByCategory } from './vanilla.js';
import { connect } from 'react-redux';

let CategoryJSX = ({match, location, dispatch, currentItem}) => 
    <div>
        <h1>This is the {match.params.categoryName} page! Id: {location.categoryId}</h1>
        <h2> This is a list of products: </h2>
        {
            filterProductByCategory(location.categoryId, products).map(product =>
                <div onClick={() => dispatch({
                    type: 'UPDATE_PRODUCT',
                    payload: product
                })}> 
                    <Link to={'/categories/' + 
                                match.params.categoryName + '/' +
                                product.name}>
                            {product.name}
                    </Link>
                </div>)
        }
    </div>

let mapStateToProps = (state) => {
    return { currentItem: state.currentItem };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryJSX);
export default Category;