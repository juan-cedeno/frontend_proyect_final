import { useContext, useEffect, useState } from "react"
import { Banner, MovieItems } from "../components";
import { MovieContext } from '../context/movie/MovieContex';
import { Movie } from '../interfaces/Movies';

import '../css/movies.css'
import { Menu } from '../components/Menu';
import { SkeletorMovie } from "../components/SkeletorMovie";

export const MoviesPages = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const {getMovies , state} = useContext(MovieContext)

    const {loading} = state

    
    useEffect(() => {
      getMovies().then(movieItems => (
          setMovies(movieItems)
    ))
    }, [])

    return (
        <div className="">
             <Menu/>
            <Banner/>

            <h2 className="title_movie">Movies</h2>
            <div className="cont_movies_items">

                {
                    movies.map(items=> (
                        <div key={items._id}>
                            {
                                loading ? <SkeletorMovie/> : <MovieItems items = {items} key={items._id}/>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
