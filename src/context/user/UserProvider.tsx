import { User } from '../../interfaces/User';
import { UserContext } from "./UserContext"
import { useReducer } from 'react';
import { userReducer } from './userReducer';
import apiConfig from '../../api/apiConfig';
import Swal from 'sweetalert2';
import apiConfigWithToken from '../../api/apiConfigWithToken';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface UserState {
    isChecking: boolean
    user: User | null
}

const INITIAL_STATE: UserState = {
    isChecking: true,
    user: null
}

export const UserProvider = ({children}: Props) => {

    const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const login = (email: string , password: string) => {
           apiConfig.post<User>('/auth/login' , {email , password}).then(({data}) => {
               dispatch({
                   type: 'authUser',
                   payload: data
                })
                if(data.token){
                    localStorage.setItem('token' , data.token)
                }
            }).catch(({response}) => {
               return  Swal.fire('Error' , response.data.message , 'error')
           })
    }

    const register = (name: string , email: string , password: string) => {
        apiConfig.post<User>('/auth/new' , {name , email , password}).then(({data}) => {
            dispatch({
                type: 'authUser',
                payload: data
            })

            if(data.token){
                localStorage.setItem('token' , data.token)
            }

        }).catch(({response}) => {
            return  Swal.fire('Error' , response.data.message , 'error')
        })
    }

    const startChecking = () => {
        apiConfigWithToken.get<User>('/auth/renew').then(({data}) => {
            dispatch({
                type: 'authUser',
                payload: data
            })
            
            if(data.token){
                localStorage.setItem('token' , data.token)
            }

        }).catch(err => {
            console.log(err);
        })
    }

    const finishCheking = () => {
        dispatch({type: 'checking'})
    }

    const logOut = () => {
        localStorage.clear()
        dispatch({type: 'logOut'})
    }

    return (
        <UserContext.Provider value={{
            userState,
            login,
            register,
            startChecking,
            finishCheking,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}
