import { Aside, MovieItems } from "../components"
import { useForm } from '../hooks/useForm';
import { FormEvent, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string'
import { MovieContext } from '../context/movie/MovieContex';
/* @ts-ignore */
import Fade from 'react-reveal/Fade';

import '../css/search.css'

export const SearchPage = () => {

    const {search} = useLocation()
    const {q = ''} = querystring.parse(search)

    const {form,handlenChange} = useForm({
        searchMovieQuery: q
    })

    const {searchMovie , getMovies} = useContext(MovieContext)

    const movie = searchMovie(q as string)

    const {searchMovieQuery} = form
    const navigate = useNavigate()

    const handlenSumit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`?q=${searchMovieQuery}`)
    }

    useEffect(() => {
        getMovies()
    }, [q])

    return (
        <div className="container_search">
            <div>
                <Aside/>
            </div>
            <div className="cont_result">
                <h1 className="title_search">Search movies</h1>
                <form
                    onSubmit={handlenSumit}
                    className="form_search"
                >
                    <input 
                        type="search" 
                        name="searchMovieQuery" 
                        value={searchMovieQuery as string}
                        onChange={handlenChange}
                        placeholder="Search a movie"
                        autoComplete="off"
                        />
                </form>
                <div>
                    {
                        (q === '') ? <p></p> 
                            : (movie.length === 0) && <p className="no_result">No result "{q}"</p>
                    }
                </div>
                <div className="result">
                    {   
                        movie.map(items=> (
                            <Fade key={items._id}>
                                <MovieItems key={items._id} items={items}/>
                            </Fade>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
