import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ProtectRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);

if(loading)
{
 return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>;
}

if(!user){
    return <Navigate to='/login'></Navigate>
}
    
return children;
};

export default ProtectRoutes;