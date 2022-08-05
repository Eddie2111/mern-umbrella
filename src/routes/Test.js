import React from "react";
import Cookies from 'universal-cookie';
const Test = () => {
    const createSession = () => {
        const cookies = new Cookies();
        cookies.set("hello kitty","login", { path: '/' }, {HttpOnly: true}, {SameSite: 'strict'}, {Secure: true}, {MaxAge: "2s"});
        console.log(cookies.get('myCat')); // Pacman
    }
    return (
        <div>
            <p> Test for sessioning</p>
            <button onClick={createSession}>session start! </button>
        </div>
    );
    }
export default Test;
