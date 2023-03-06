import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import "./styles/index.scss";



export default function App(){
    const {theme} = useTheme();
    return(
        <div className={classNames('app',{},[theme])}>
            <Link to={'/'}>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter/>
        </div>
    )
}