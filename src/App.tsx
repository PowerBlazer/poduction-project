import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import "./styles/index.scss";
import { useTheme } from './theme/useTheme';

export default function App(){
    const {theme} = useTheme();
    return(
        <div className={`app ${theme}`}>
            <Link to={'/'}>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync/>}/>
                    <Route path='about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}