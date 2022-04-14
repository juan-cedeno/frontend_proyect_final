import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/movie/MovieContex';
import { Movie } from '../interfaces/Movies';
import { BtnMore } from "./BtnMore";
/* @ts-ignore */
import {Carousel} from '3d-react-carousal';



import '../css/banner.css'
import { BtnMoreCarousel } from './BtnMoreCarousel';


export const Banner = () => {

    const {state , getMovies} = useContext(MovieContext)
    const {movies,loading} = state


    const imgs = movies.map(item => (
        <div>
            <p className='title_carr'>{item.title}</p>
            <img src={item.backdrop_path} alt={item.title}/>
            <BtnMoreCarousel _id={item._id}/>
        </div>
    ))

    return (
       <div className=''>
           <Carousel 
                      slides={imgs} 
                      autoplay={true} 
                      interval={3000}
                      arrows = {false}
            />
            
       </div>

    )
}
