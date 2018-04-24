import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let TopNavbarJSX = ({ userName }) =>
    <ul className="top-nav">
        <li>{userName}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <Link to="/users/">Profile</Link> */}
        <li>
          <Link to="/cart">Cart</Link>
       </li>
    </ul>;

let mapStateToProps = (state) => {
    return { userName: state.userName };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let TopNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNavbarJSX);

export default TopNavbar;