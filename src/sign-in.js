import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { findUserByUsername } from './vanilla';
import { fetchSignIn } from './fetch-data';

let SignInJSX = ({userObject, userSignIn, dispatch}) => 
    <div>
        <input type="text" value={userSignIn.identifier} onChange={(event) =>
            dispatch({
                type: 'USER_SIGN_IN',
                payload: {
                    identifier: event.target.value,
                    password: userSignIn.password
                }
            })} />
        <input type="text" value={userSignIn.password} onChange={(event) =>
            dispatch({
                type: 'USER_SIGN_IN',
                payload: {
                    identifier: userSignIn.identifier,
                    password: event.target.value
                }
            })} />
        <button onClick={() => 
            fetchSignIn(userSignIn)
            .then(data => dispatch({
                type: 'UPDATE_USER_OBJECT',
                payload: data
            }))
        }>Sign In</button>
    </div>

let mapStateToProps = (state) => {
    return { userObject: state.userObject,
             userSignIn: state.userSignIn };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInJSX);

export default SignIn;