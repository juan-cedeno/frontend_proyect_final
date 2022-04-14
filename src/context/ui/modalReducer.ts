import { ModalState } from "./ModalProvider";

type ModalAction = {type: 'openModal'}
                   |{type: 'closeModal'}  

export const modalReducer = (state: ModalState , action: ModalAction): ModalState => {
    
    switch (action.type) {
       
        case 'openModal':
            return {
                isOpen: true
            }
        case 'closeModal':
            return {
                isOpen: false
            }    
        default:
            return state
    }

}
