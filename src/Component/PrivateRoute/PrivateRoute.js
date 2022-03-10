import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useFirebase from '../hooks/useFirebase';
 ;


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();

  if (isLoading) {
    return <div><h5>Loading</h5></div>
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;