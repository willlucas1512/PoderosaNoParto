import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import StoreContext from './../../componentes/Store/Context';


const RoutesPrivate = ({ children }) => {
  const { token } = useContext(StoreContext);
  
  return ((token && token !== null) 
    ? (children)
     : <Navigate to="/"
    
    />);
};




export default RoutesPrivate;
