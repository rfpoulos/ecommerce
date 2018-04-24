import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './home-page';
import Category from './category';
// import Profile from './profile';
import Cart from './cart';
import Product from './product';
import categories from './json/categories';
import TopNavbar from './top-navbar';

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

let App = () =>
  <Router>
    <div>
      <TopNavbar />
      <div className="main-section">
        <CategoryNav />
        <Switch>
          <Route path="/homepage" component={HomePage} />
          <Route path="/cart" component={Cart} />
          <Route path="/categories/:categoryName" exact component={Category} />
          <Route path="/categories/:categoryName/:productName" component={Product} />
        </Switch>
      </div>
    </div>
  </Router>
;

export default App;