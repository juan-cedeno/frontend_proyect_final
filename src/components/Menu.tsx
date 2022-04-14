import { NavLink } from "react-router-dom"

import '../css/menu.css'
import { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

export const Menu = () => {

   const {userState} = useContext(UserContext)
   const {user} = userState

    return (
        <div className="cont_menu">
            <NavLink className= {({isActive}) => 'menu_items' + (isActive ? ' active' : '')} to='/'>Movies</NavLink>
            <NavLink className= {({isActive}) => 'menu_items' + (isActive ? ' active' : '')} to='/search'>Search</NavLink>

        
           {
               user && (
                <NavLink className= {({isActive}) => 'menu_items add' + (isActive ? ' active' : '')}  to='/admin'>Add movie</NavLink>
               )
           }
        </div>
    )
}
