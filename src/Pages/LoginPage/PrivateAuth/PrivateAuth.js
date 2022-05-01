import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAuth = ({children}) => {
    const [user] = useAuthState();
    let location = useLocation();

    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default PrivateAuth;