import { MovieState } from './MovieProvider';
import { Movie } from '../../interfaces/Movies';

type MovieAction =  |{type: 'getMovies' , payload: Movie[]}
                    |{type: 'addMovie' , payload: Movie}
                    |{type: 'deleteMovie' , payload: {id: string}}
                    |{type: 'setActive' , payload: Movie}
                    |{type: 'updateMovie' , payload: Movie}
                    |{type: 'clearMovieActive'}



export const movieReducer = (state: MovieState , action: MovieAction): MovieState => {
   
    switch (action.type) {
        case 'getMovies':
            return {
                ...state,
                movies: action.payload,
                loading: false
            }  
        case "addMovie":
            return{
                ...state,
                movies: [action.payload , ...state.movies ]
            } 
        case 'deleteMovie':
            return{
                ...state,
                movies : state.movies.filter(movie => movie._id !== action.payload.id)
            }
        case 'setActive':
            return{
                ...state,
                movieActive : action.payload
            } 
        case 'updateMovie':
            return{
                ...state,
                movies: state.movies.map(
                    item => item._id === action.payload._id ? action.payload : item
                )
            } 
        case 'clearMovieActive':
            return{
                ...state,
                movieActive: {} as Movie
            }                       
        default:
            return state
    }

}
