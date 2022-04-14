import { Routes, Route } from 'react-router-dom';
import { Aside, Banner, Menu } from '../components';
import { AsideRight } from '../components/AsideRight';
import { CreateEditPage, MovieDetail, NoFound, SearchPage, SeriesPages } from '../pages';
import { HomePage } from '../pages/HomePage';
import { MoviesPages } from '../pages/MoviesPages';
import { PrivateRouter } from './PrivateRouter';


export const DashboardRouter = () => {
return (
<div>
    {/* <HomePage/> */}
    <div>
        {/* <Aside/> */}
        {/* <Menu/> */}
    </div>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='movies' element={<MoviesPages />}/>
        <Route path='movie/:movieId' element={<MovieDetail />}/>
        <Route path='admin' element={
            <PrivateRouter>
                <CreateEditPage/>
            </PrivateRouter>
        }/>
        <Route path='search' element={<SearchPage />}/>
        {/* <Route path='*' element={<NoFound/>}/> */}
    </Routes>
</div>
)
}