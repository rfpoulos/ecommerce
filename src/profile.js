import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

let ProfileJSX = ({match, userObject, dispatch}) => 
    <div>
        <h1>{userObject.user.username}</h1>
        <button onClick={
            () => {
                dispatch({
                    type: 'UPDATE_USER_OBJECT',
                    payload: {user: {username: 'Sign In'}}
                })
                dispatch({
                    type: 'USER_SIGN_IN',
                    payload: {}
                })
            }
        }>Sign Out</button>
    </div>

let mapStateToProps = (state) => {
    return { userObject: state.userObject };
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileJSX);

export default Profile;