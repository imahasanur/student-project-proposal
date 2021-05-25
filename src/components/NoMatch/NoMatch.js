import React from 'react';
import { useLocation } from 'react-router';

const NoMatch = () => {
    const location = useLocation();
    return (
        <div>
          <h4 className="text-center p-5 m-5 text-danger ">Not Found for <code>{location.pathname}</code>  !! 404 Error</h4>
        </div>
    );
};

export default NoMatch;