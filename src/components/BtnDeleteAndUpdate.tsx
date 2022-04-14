
import '../css/btns.css'
import { MovieContext } from '../context/movie/MovieContex';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Movie } from '../interfaces/Movies';
import { useNavigate } from 'react-router-dom';

interface Props {
    items: Movie
}

export const BtnDeleteAndUpdate = ({items}: Props) => {

    const {deleteMovie , setActiveMovie} = useContext(MovieContext)
    const navigate = useNavigate()

    const handlenDelete = () => {
        deleteMovie(items._id)
       Swal.fire({
           title: 'Are you sure you want to delete this movie?',
           showCancelButton: true,
           confirmButtonText: 'Sure',
           confirmButtonColor: 'red'
       }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload()
          }
       })
    }

    const handlenEdit = () => {
        setActiveMovie(items)
        navigate('/admin')
    }

    return (
        <div className="cont_btns">
            <button onClick={handlenDelete}><i className="fa-solid fa-trash-can"></i></button>
            <button onClick={handlenEdit} ><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
    )
}
