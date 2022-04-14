import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/movie/MovieContex';
import { Movie } from '../interfaces/Movies';
import { BtnWatch } from '../components/BtnWatch';
import { MovieModal } from '.';


import '../css/movieDetail.css'

export const MovieDetail = () => {

    const {movieId} = useParams()
    const {getMovieById} = useContext(MovieContext)

    const [movieDetail, setMovieDetail] = useState<Movie>({} as Movie)
    const navigate = useNavigate()

    useEffect(() => {
        if (movieId) {
            getMovieById(movieId).then(item => (
                setMovieDetail(item!) 
            ))
        }
        }, [movieId])
        
        const handlenBack = () => {
            navigate(-1)
        }
        
        if (!movieDetail) {
            return <p>hello</p>
        }

    return (
        <div>
            <MovieModal movieDetail = {movieDetail}/>
             <img className='backDetail' src={movieDetail.backdrop_path} alt={movieDetail.title} />
             <div className='cont_desc_movie'>
                <img src={movieDetail.poster_path} alt={movieDetail.title} />
                <div className='cont_letter_detail'>
                <label className='title_detail'>{movieDetail.title} ({movieDetail.release_date})</label>
                <h3 className='resume_detail'>Resume</h3>
                <p className='overview'>{movieDetail.overview}</p>
                <BtnWatch/>
                <div className='cont_dire_actor'>
                    <div className='cont_cast'>
                        <label className='sub_cast'>Director</label>
                        <label className='title_cast'>{movieDetail.director}</label>
                    </div>
                    <div className='cont_cast'>
                        <label className='sub_cast'>Actors</label>
                        <label className='title_cast'>{movieDetail.actors}</label>
                    </div>
                </div>
                     <button onClick={handlenBack} className='back_detail'>Back</button>
                </div>
             </div>
        </div>
    )
}
