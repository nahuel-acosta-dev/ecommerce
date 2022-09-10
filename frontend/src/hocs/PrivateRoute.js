import React from 'react';
import {Route, Navigate} from 'react-router';
import {connect} from 'react-redux';

const PrivateRoute = ({
    element: Element,
    auth: {isAuthenticated, loading},
    ...rest
}) => {
   return(
        <Route
        {...rest}
        render={props => !isAuthenticated && !loading ?
        (<Navigate to='/login'/>)
        :
        (<Element {...props}/>)
        }/>
   )
}

const mapStateToProps = (state) => ({
    auth: state.Auth
})

export default connect(mapStateToProps,{

}) (PrivateRoute);