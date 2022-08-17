import React,{useEffect, useState} from "react";
import axios from "axios";
import Backend from "../Backend/Backend";

const Test = () => {
    const [data, setData] = useState({});
    function asp() {
    setTimeout(() => {
        const x = Backend("home");
        setData(x);
    } ,1000);
}
useEffect(() => {
asp();
} ,[]);
console.log(data);

    
    
    //const back = Backend("home");
    

    return (
        <div>
            <p>hi</p>
            
        </div>
    );
    }
export default Test;



/*
import Cookies from 'universal-cookie';
//import localStorage from "localstorage";
    const jwtio = ()=>{
        axios.get('http://localhost:3200/test')
        .then(function (response) {
            localStorage.setItem('ErisServiceProvider001', response.data.accessToken);
            localStorage.setItem('ErisServiceProvider002', response.data.refreshToken);
        }
        )
    }
    const createSession = () => {
        const cookies = new Cookies();
        cookies.set("hello kitty","login", { path: '/' }, {HttpOnly: true}, {SameSite: 'strict'}, {Secure: true}, {MaxAge: "2s"});
        console.log(cookies.get('myCat')); // Pacman
    }
    const storageTest = () => {
        localStorage.getItem('jwt');
        console.log(localStorage.getItem('ErisServiceProvider001')); // accesstoken
        console.log(localStorage.getItem('ErisServiceProvider002')); // accesstoken
    }
    */

    /*
    <p> Test for sessioning</p>
            <button onClick={createSession}>session start! </button>
            <p> Test for jwt</p>
            <button onClick={jwtio}>session start! </button>
            <p> Test for prefetch</p>
            <button onClick={storageTest}>session start! </button>
            */