import React from 'react';
import ReactDOM from 'react-dom';
import products from './json/products'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { filterProductByCategory } from './vanilla.js';

let Category = ({match, location}) => 
    <div>
        <h1>This is the {match.params.categoryName} page! Id: {location.categoryId}</h1>
        <h2> This is a list of products: </h2>
        {
            filterProductByCategory(location.categoryId, products).map(product => 
                <Link to={ 
                    { pathname: '/categories/' + 
                                match.params.categoryName + '/' +
                                product.name,
                      categoryId: location.categoryId
                    }
                }>
                        {product.name}
                </Link>)
        }
    </div>

export default Category;