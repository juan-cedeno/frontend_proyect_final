import { Movie } from '../interfaces/Movies';
import { BtnMore } from './BtnMore';
import { BtnDeleteAndUpdate } from '.';
import { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

import '../css/moviesItems.css'

interface Props {
    items: Movie
}

export const MovieItems = ({items}: Props) => {

    const {poster_path,title , _id} = items
    const {userState} = useContext(UserContext)

    return (
        <div className='movies'>
            <>
                {
                    poster_path ? <img src={poster_path} alt={title} /> : <img src={require('../assets/noImage.png')} alt="No" />
                }
            </>
            <p className='title_movie_item'>{title}</p>
            <BtnMore  _id={_id}/>
            {
                userState.user && <BtnDeleteAndUpdate items = {items}/>
            }
            
        </div>
    )
}
