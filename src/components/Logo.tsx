
import '../css/logo.css'

interface Props {
    title: string
}

export const Logo = ({title}: Props) => {
    return (
        <div className='cont_logo'>
            <i className="fa-solid fa-film"></i>
            <label className='title_logo'>{title}</label>
        </div>
    )
}
