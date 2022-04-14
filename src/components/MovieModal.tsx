import Modal from 'react-modal';
import ReactPlayer from 'react-player'


import { useContext } from 'react';
import { ModalContext } from '../context/ui/ModalContext';

import '../css/modal.css'
import { Movie } from '../interfaces/Movies';

interface Props {
  movieDetail : Movie
}

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px'
    },
  };
  
  Modal.setAppElement('#root');

export const MovieModal = ({movieDetail}: Props) => {

    const {closeModal,modalState} = useContext(ModalContext)

    return (
      <div>
        <Modal
          isOpen={modalState.isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          // className= 'modal'
          overlayClassName='modal'
          
        >
          <ReactPlayer 
            url={movieDetail.trailer} 
            controls = {true}
            width= '750px'
            height='450px'
            playing = {true}
            muted = {true}
            />
        </Modal>
    </div>
    )
}
