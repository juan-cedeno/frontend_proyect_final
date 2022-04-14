import { createContext } from 'react';
import { ModalState } from './ModalProvider';

interface ModalContextProps {
    modalState: ModalState
    openModal: () => void
    closeModal: () => void
}

export const ModalContext = createContext({} as ModalContextProps)