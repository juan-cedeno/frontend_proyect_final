import {MoviesPages } from "."
import { Aside, Menu } from "../components"
import { AsideRight } from "../components/AsideRight"

import '../css/home.css'

export const HomePage = () => {
    return (
        <>
            <div className="cont_home">
                <Aside/>
                <MoviesPages/>
            </div>
        </>
    )
}
