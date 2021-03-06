import { createContext } from 'react';
import { UserState } from './UserProvider';

interface ContextProps {
    userState: UserState
    login: (email: string, password: string) => void
    register: (name: string, email: string, password: string) => void
    startChecking: () => void
    finishCheking: () => void,
    logOut: () => void
}

export const UserContext = createContext({} as ContextProps)