import { createContext } from "react";
import { MovieState } from './MovieProvider';
import { Movie } from '../../interfaces/Movies';


interface ContextProps {
    state: MovieState
    getMovies: () => Promise<Movie[]>
    getMovieById: (id: string) => Promise<Movie | undefined>
    addMovie: (movie: Movie) => void
    deleteMovie: (id: string) => Promise<void>
    setActiveMovie: (movie: Movie) => void
    updateMovie: (movie: Movie) => void
    searchMovie: (name: string) => Movie[]
    clearMovieActive: () => void
}

export const MovieContext = createContext({} as ContextProps)