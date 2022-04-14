import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user/UserContext';

interface Props {
    children: JSX.Element
}

export const PublicRouter = ({children}: Props) => {

    const {userState} = useContext(UserContext)

    const {user} = userState

    return user?.token
           ? <Navigate to='/'/> 
           : children
}
