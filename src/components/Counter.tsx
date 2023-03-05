import { useState } from "react";
import classes from "./counter.module.scss";

export default function Counter(){
    const [count,setCount] = useState<number>(0);

    const clickHandler = () => {
        setCount(count=>count+1);
    }


    return(
        <div>
            <h1>{count}</h1>
            <button onClick={clickHandler} className={classes.button}>Increment</button>
        </div>
    )
}