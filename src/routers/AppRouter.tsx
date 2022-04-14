import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { NoFound } from "../pages/NotFound";
import { AuthRouter } from "./AuthRouter";
import { DashboardRouter } from './DashboardRouter';
import { useEffect, useContext } from 'react';
import { UserContext } from '../context/user/UserContext';
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {

    const {startChecking} = useContext(UserContext)


    useEffect(() => {
        startChecking()
    }, [])

return (
<div className="container">
    <BrowserRouter>
        <Routes>
            <Route path = '/*' element = {<DashboardRouter/>}/>
            <Route path = '/auth/*' element = {
                <PublicRouter>
                    <AuthRouter/>
                </PublicRouter>
            }/>
            <Route path='*' element={<NoFound/>}/>
        </Routes>
    </BrowserRouter>

</div>
)
}