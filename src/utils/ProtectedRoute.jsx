import React from 'react';

function ProtectedRoute({ element: Component, ...props }) {
  return <Component {...props} />;
}

export default ProtectedRoute;
