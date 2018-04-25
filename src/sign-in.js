import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import users from './json/users'
import { findUserByUsername } from './vanilla'

let SignInJSX = ({userName, dispatch}) => 
    <div>
        <input type="text" value={userName} onChange={(event) =>
            dispatch({
                type: 'UPDATE_USER',
                payload: event.target.value
            })} />
        <button onClick={
            dispatch({
                type: 'UPDATE_USER_OBJECT',
                payload: findUserByUsername(userName, users)
            })
        }>Change User</button>
    </div>

let mapStateToProps = (state) => {
    return { userName: state.userName,
             userObject: state.userObject };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInJSX);

export default SignIn;