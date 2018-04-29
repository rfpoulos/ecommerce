import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { filterProductsByCategory, findCategoryIdByName } from './vanilla.js';
import { connect } from 'react-redux';

let CategoryJSX = ({match, categories, products}) => 
    <div>
        <h1>This is the {match.params.categoryName} page!</h1>
        <h2> This is a list of products: </h2>
        <div>{
            products.map(product =>
                <Link to={match.params.categoryName + '/' + product.title}>
                    {product.title}
                </Link>
            )
        }
        </div>
    </div>;

let mapStateToProps = (state, {match}) => {
    let categoryObject = state.categories.find(category =>
        category.title === match.params.categoryName)
    let products = [];
    if (categoryObject) {
        products = categoryObject.products;
    }
    return { categories: state.categories,
             products};
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Category = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryJSX);

export default Category;