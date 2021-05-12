import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from './../../componentes/Store/Context';

const RoutesPrivate = ({ children, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={({ location }) => (token !== null)
        ? (children)
        : (<Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}


        />)
      }
    />
  )
}

export default RoutesPrivate;
