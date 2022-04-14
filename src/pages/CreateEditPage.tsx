import '../css/admin.css'
import { useForm } from '../hooks/useForm';
import { Movie } from '../interfaces/Movies';
import { FormEvent, useContext, useEffect } from 'react';
import { MovieContext } from '../context/movie/MovieContex';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const CreateEditPage = () => {

    const { form ,handlenChange , clearForm , setForm} = useForm({
        actors: '',
        director: '',
        overview: '',
        release_date: '',
        title: '',
        trailer: '',
        backdrop_path: '',
        poster_path: ''
    } as Movie)

    const {actors,director,overview,release_date,title,trailer,backdrop_path,poster_path} = form

    const {addMovie , state , updateMovie , clearMovieActive} = useContext(MovieContext)
    const {movieActive} = state
    const navigate = useNavigate()
        
    useEffect(() => {
        if (movieActive) {
            setForm(movieActive)
        }else{
            setForm(form)
        }
    }, [movieActive , setForm])

    const handlenSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()

        const newMovie = {
            _id: state.movie._id,
            actors,
            director,
            overview,
            release_date,
            title,
            trailer,
            backdrop_path,
            poster_path,
        } as Movie
        
        
        if (movieActive._id) {
            updateMovie(form)
        }else{
            addMovie(newMovie)
        }
        
        if (!movieActive._id) {
            clearForm()
        }
        Swal.fire('Succes' , '' , 'success') 

    }

    const handleBack = () => {
        navigate(-1)
        clearMovieActive()
    }

    return (
        <div className="cont_admin">
           <div className='cont_btn_backs'>
                <h2 className='title'>Add a movie</h2>
                 <button className='btn_back_admin' onClick={handleBack}>Back</button>
           </div>
            <form onSubmit={handlenSubmit}>
                <label>Title <span className='obli'>*</span></label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title"
                    value={title}
                    onChange={handlenChange}
                    autoComplete='off'
                    />

                <label>Director <span className='obli'>*</span></label>
                <input 
                    type="text" 
                    name="director" 
                    placeholder="Director"
                    value={director}
                    onChange={handlenChange}
                    autoComplete='off'
                    />
                <label>Resume <span className='obli'>*</span></label>
                <textarea
                    placeholder="Resume"
                    value={overview}
                    onChange={handlenChange}
                    name='overview'
                    className='input'
                    autoComplete='off'
                />
                <label>Trailer <span className='obli'>*</span></label>
                <input 
                    type="text" 
                    name="trailer"
                    placeholder="https://www.youtube.com/watch?v=2OehO7VgPTo"
                    value={trailer}
                    onChange={handlenChange}
                    autoComplete='off'
                />
                <label>Actors <span className='obli'>*</span></label>
                <input 
                    type="text" 
                    name="actors"
                    placeholder="actor1,actor2,actor3"
                    value={actors}
                    onChange={handlenChange}
                    autoComplete='off'
                />
                <label>Backdrop image</label>
                <input 
                    type="text" 
                    name="backdrop_path"
                    placeholder="Backdrop image URL"
                    value={backdrop_path}
                    onChange={handlenChange}
                    autoComplete='off'
                />

                <label>Poster image</label>
                <input 
                    type="text" 
                    name="poster_path"
                    placeholder="Poster image URL"
                    value={poster_path}
                    onChange={handlenChange}
                    autoComplete='off'
                />
                <label>Release date</label>
                <input 
                    type='text'
                    name="release_date"
                    value={release_date}
                    onChange={handlenChange}
                    placeholder='yyyy-mm-dd'
                    autoComplete='off'
                />
                <button>{movieActive._id ? 'Edit movie' : 'Add movie'}</button>
            </form>
        </div>
    )
}
