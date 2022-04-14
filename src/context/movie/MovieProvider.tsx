import { MovieContext } from "./MovieContex"
import { Movie, MovieResponse, MovieDetail } from '../../interfaces/Movies';
import { useReducer } from 'react';
import { movieReducer } from './movieReducer';
import apiConfig from "../../api/apiConfig";
import apiConfigWithToken from '../../api/apiConfigWithToken';
import Swal from 'sweetalert2';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface MovieState {
    movies: Movie[],
    loading: boolean
    movie: Movie
    movieActive: Movie
}

const INITIAL_STATE: MovieState = {
    movies:[] ,
    movie: {} as Movie,
    movieActive: {} as Movie,
    loading: true
}

export const MovieProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE)

    const getMovies = async () => {
        try {
            const {data} = await apiConfig.get<MovieResponse>('/movie')
            dispatch({
                type: 'getMovies',
                payload: data.movies
            })

            return data.movies
        } catch (error) {
            console.log(error);
            return []
        }
    }

    const getMovieById = async (id: string) => {
        try {     
            const {data} = await apiConfig.get<MovieDetail>(`/movie/${id}`)

            return data.movie
            
        } catch (error) {
            console.log(error);
        }
    }

    const addMovie = (movie: Movie) => {
        apiConfigWithToken.post<Movie>('/movie' , movie).then(({data}) => {
            dispatch({
                type: 'addMovie',
                payload: data
            })
        }).catch(({response}) => {
            Swal.fire('Error' , response.data.message , 'error')
        })
    }

    const deleteMovie = async (id: string) => {
         await apiConfigWithToken.delete(`/movie/${id}`)

         dispatch({
             type: 'deleteMovie',
             payload: {id}
         })
    }

    const setActiveMovie = (movie: Movie) => {
        dispatch({
            type: 'setActive',
            payload: movie
        })
    }

    const updateMovie = (movie:Movie) => {
        apiConfigWithToken.put<Movie>(`/movie/${movie._id}` , movie).then(({data}) => {
            
            dispatch({
                type: 'updateMovie',
                payload: data
            })
        })
    }

    const searchMovie = (name: string) => {
        if (name.length === 0) {
            return []
        }
        name = name.toLowerCase()
            return state.movies.filter(item => item.title.toLowerCase().includes(name))
    }

    const clearMovieActive = () => {
        dispatch({
            type: 'clearMovieActive'
        })
    }

    return (
        <MovieContext.Provider value={{
            state,
            getMovies,
            getMovieById,
            addMovie,
            deleteMovie,
            setActiveMovie,
            updateMovie,
            searchMovie,
            clearMovieActive
        }}>
            {children}
        </MovieContext.Provider>
    )
}
