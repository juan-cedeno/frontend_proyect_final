import { User } from "../../interfaces/User";
import { UserState } from "./UserProvider";

type userAction = |{type: 'authUser' , payload: User}
                  |{type: 'checking'}
                  |{type: 'logOut'}



export const userReducer = (state : UserState , action: userAction): UserState => {
   
    switch (action.type) {
        case 'authUser':
        return {
            isChecking: false,
            user: action.payload
        }

        case 'checking':
            return {
                ...state,
                isChecking: false
        }

        case 'logOut':
            return {
                ...state,
                isChecking: false,
                user: null
            }
    
        default:
            return state
    }

}
