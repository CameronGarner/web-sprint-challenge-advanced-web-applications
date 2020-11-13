import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = function({ component:Component, ...rest}){
    return(<Route 
        {...rest}
        render={function(props){
            if (localStorage.getItem("token")) {
                return <Component {...props}/>;
            } else {
                return <Redirect to="/login"/>;
            }
        }}
    />)
}

export default PrivateRoute;