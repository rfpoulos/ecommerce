import React from 'react';
import ReactDOM from 'react-dom';
import products from './json/products'
import categories from './json/categories'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { filterProductsByCategory, findCategoryIdByName } from './vanilla.js';
import { connect } from 'react-redux';

let Category = ({match, dispatch, currentItem}) => 
    <div>
        <h1>This is the {match.params.categoryName} page! Id: 
            {findCategoryIdByName(match.params.categoryName, categories)}</h1>
        <h2> This is a list of products: </h2>
        {
            filterProductsByCategory(
                findCategoryIdByName(match.params.categoryName, categories), 
                products).map(product =>
                <Link to={'/categories/' + 
                                match.params.categoryName + '/' +
                                product.name
                        }>
                        {product.name}
                </Link>)
    }
    </div>
export default Category;