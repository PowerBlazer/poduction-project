import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import "./styles/index.scss";
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib/classNames/classNames';



export default function App(){
    const {theme} = useTheme();
    return(
        <div className={classNames('app',{},[theme])}>
            <Link to={'/'}>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}