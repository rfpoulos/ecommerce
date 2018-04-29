import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from './fetch-data';

let CategoryNavJSX = ({categories}) =>
  <ul className="category-nav">
    {
      categories.map(category => 
        <li>
          <Link to={'/categories/' + category.title }>
            {category.title}
          </Link>
        </li>
      )
    }
  </ul>;

class FetchedState extends Component {
  componentDidMount() {
      fetchCategories(this.props.jwt)
      .then( categories =>
          this.props.dispatch({
              type: 'SET_ALL_CATEGORIES',
              payload: categories
          })
      )
  }
  componentDidUpdate() {
      if (this.props.categories.length === 0) {
          fetchCategories(this.props.jwt)
          .then( categories =>
              this.props.dispatch({
                  type: 'SET_ALL_CATEGORIES',
                  payload: categories
              })
          )
      }
  }
  render() {
      return <CategoryNavJSX {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return { categories: state.categories,
           jwt: state.jwt };
}

let mapDispatchToProps = (dispatch) => {
  return { dispatch: dispatch };
}

let CategoryNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchedState);


  export default CategoryNav;