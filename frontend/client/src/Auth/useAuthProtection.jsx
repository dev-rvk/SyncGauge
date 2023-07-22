import { useEffect } from 'react';
import {Navigate} from "react-router-dom";
const useAuthProtection = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      // If there is no access token, redirect to the login page
      return <Navigate to='/login' />
    }
  }, []);
};

export default useAuthProtection;