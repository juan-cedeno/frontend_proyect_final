import { useContext } from 'react';
import { ModalContext } from '../context/ui/ModalContext';

export const BtnWatch = () => {

    const {openModal} = useContext(ModalContext)

    const handlenClick = () => {
        openModal()
    }

    return (
        <button 
            onClick={handlenClick}
            className='trailer'
            ><i className="fa-solid fa-play"></i>
            Play trailer</button>
    )
}
