import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import categories from './json/categories';

let CategoryNav = () =>
  <ul className="category-nav">
    {
      categories.map(category => 
        <li>
          <Link to={
            { pathname: '/categories/' + category.name,
              categoryId: category.id
            }}>
            {category.name}</Link>
        </li>
      )
    }
  </ul>;

  export default CategoryNav;