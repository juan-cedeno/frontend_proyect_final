import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user/UserContext';


interface Props {
    children: JSX.Element
}

export const PrivateRouter = ({children}: Props) => {

    const {userState} = useContext(UserContext)

    const {user} = userState

    return user?.token 
          ?  children 
          : <Navigate to= '/auth/login'/>
}   
