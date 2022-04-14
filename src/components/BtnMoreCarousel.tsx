import { useNavigate } from 'react-router-dom';


interface Props {
    _id : string
}

export const BtnMoreCarousel = ({_id}: Props) => {

    const navigate = useNavigate()
    
    const handlenClickMovieDetail = () => {
        navigate(`/movie/${_id}`)
    }

    return (
        <button 
            onClick={handlenClickMovieDetail} 
            className='btn_more more_movie btnCarrousel'>More</button>
    )
}