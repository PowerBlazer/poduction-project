import { useTheme } from "app/providers/ThemeProvider";

;

function MainPage(){
    const {toggleTheme} = useTheme();
    return (  
        <>
            <div>MainPage</div>
            <button onClick={toggleTheme}>Toggle</button>
        </>
    );
}

export default MainPage;