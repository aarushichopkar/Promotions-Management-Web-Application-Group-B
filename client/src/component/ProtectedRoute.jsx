// src/component/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = () => {
  const authString = localStorage.getItem('auth');

  // if(authString){
  //   const auth = JSON.parse(authString);
  //   axios.defaults.headers.common["Authorization"] = auth.token;
  // }

  return authString ? <Outlet/> : <Navigate to="/signin" />;
};

export default ProtectedRoute;

