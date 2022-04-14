import { ModalContext } from "./ModalContext"
import { useReducer } from 'react';
import { modalReducer } from './modalReducer';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface ModalState {
    isOpen: boolean
}

const INITIAL_STATE:ModalState = {
    isOpen: false
}

export const ModalProvider = ({children}: Props) => {

    const [modalState, dispatch] = useReducer(modalReducer, INITIAL_STATE)

    const openModal = () => {
        dispatch({type: 'openModal'})
    }

    const closeModal = () => {
        dispatch({type: 'closeModal'})
    }

    return (
        <ModalContext.Provider value={{
            modalState,
            openModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}
