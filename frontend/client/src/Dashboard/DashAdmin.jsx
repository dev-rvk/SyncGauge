import useAuthProtection from '../Auth/useAuthProtection.jsx'
import {Navigate} from "react-router-dom";
import {useState, useEffect} from "react";

const DashAdmin = () => {
        const accessToken = localStorage.getItem('accessToken')
        const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken);
        // accessToken ? true : false == !!accessToken
        const handleLogout = () => {
        // Remove the access token from local storage
        localStorage.removeItem('accessToken');
        // Redirect the user to the login page
        setIsLoggedIn(false)
        };

        if(!isLoggedIn){
            return <Navigate to={'/login'} />
        }else{
           return(
            <>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </>
        )
        }
}
export default DashAdmin;