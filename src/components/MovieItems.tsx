import { Movie } from '../interfaces/Movies';
import { BtnMore } from './BtnMore';

import '../css/moviesItems.css'
import { BtnWatch } from './BtnWatch';
import { BtnDeleteAndUpdate } from '.';
import { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

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
                    poster_path ? <img src={poster_path} alt={title} /> : <img src={require('../assets/noImage.png')} alt="No image" />
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
