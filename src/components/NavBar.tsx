import { Link, NavLink } from "react-router-dom"

import '../css/navbar.css'
import { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

export const NavBar = () => {

    const {userState , logOut} = useContext(UserContext)
    const {user} = userState
    
    return (
        <div className="cont_navbar">
            <label className="menu">menu</label>
            <NavLink className="link_menu home" to= '/'><i className="fa-solid fa-house icon-menu icon-active"></i>Home</NavLink>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-church icon-menu"></i>Community</NavLink>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-circle-notch icon-menu"></i>Discovery</NavLink>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-clock icon-menu"></i>Coming soon</NavLink>

            <label className="menu">social</label>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-user icon-menu"></i>Friends</NavLink>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-champagne-glasses icon-menu"></i>Parties</NavLink>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-compact-disc icon-menu"></i>Media</NavLink>

            <label className="menu">general</label>
            <NavLink className="link_menu" to= '/'><i className="fa-solid fa-gear icon-menu"></i>Setting</NavLink>
            <>
                {
                    user?.token 
                        ? <button onClick={logOut} className="btn_logout"><i className="fa-solid fa-arrow-right-from-bracket icon-menu"></i>Log Out</button>
                        : <NavLink className="link_menu" to= '/auth/login'><i className="fa-solid fa-arrow-right-to-bracket icon-menu"></i>Login</NavLink>
                }
            </>
        </div>
    )
}
