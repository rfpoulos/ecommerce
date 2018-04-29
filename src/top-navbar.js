import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';

let TopNavbarJSX = ({ userObject, cart }) =>
    <ul className="top-nav">
        <li>
            <Link to={'/profile/' + userObject.user.username}>
                {userObject.user.username}
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
    return { userObject: state.userObject,
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