import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useFirebase();
    if (!admin) { return <CircularProgress /> }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email && admin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }
};

export default AdminRoute;