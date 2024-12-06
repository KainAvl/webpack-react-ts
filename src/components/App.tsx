import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <h1>UWU Count:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)} className={classes.button}>inc</button>
            <Outlet/>
        </div>
    );
};