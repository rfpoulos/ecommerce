import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';

let TopNavbarJSX = ({ userName, cart }) =>
    <ul className="top-nav">
        <li>
            <Link to={'/profile/' + userName}>
                {userName}
            </Link>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/cart">Cart ({cart.length})</Link>
       </li>
    </ul>;

let mapStateToProps = (state) => {
    return { userName: state.userName,
             cart: state.cart };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let TopNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopNavbarJSX);

export default TopNavbar;