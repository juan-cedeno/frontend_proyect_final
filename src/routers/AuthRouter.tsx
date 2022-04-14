import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../pages/LoginPage';
// import { NoFound } from "../pages/NotFound";
import { RegisterPage } from '../pages/RegisterPage';

export const AuthRouter = () => {
return (
<div>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        {/* <Route path='*' element={<NoFound/>}/> */}
    </Routes>
</div>
)
}