import { useTheme } from "../../theme/useTheme";

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