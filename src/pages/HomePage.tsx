import {MoviesPages } from "."
import { Aside } from "../components"


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
