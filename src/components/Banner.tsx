import { useContext } from 'react';
import { MovieContext } from '../context/movie/MovieContex';
/* @ts-ignore */
import {Carousel} from '3d-react-carousal';



import '../css/banner.css'
import { BtnMoreCarousel } from './BtnMoreCarousel';


export const Banner = () => {

    const {state} = useContext(MovieContext)
    const {movies} = state


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
