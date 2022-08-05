import { useState } from "react"
import React from "react";
import axios from "axios";
import '../App.css';

import SimpleNav from '../components/Simplenav';
export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
// this does not work since no axios → no data passing to backend → no next page
// consider adding captcha here
    interface FormDataType {name:string, email: email, password: string}
    const responseBody: FormDataType = {name: "", email: "", password: ""}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.name = name
        responseBody.email = email
        responseBody.password = password
        // axios should be from here //
        axios.post("http://localhost:3200/signup", responseBody)
            .then((res) => {
                const status = (res.data.status)
                console.log(res.data)
                if (status === 200) {
                    window.location.href = res.data.route //"/login"
                }
            }
            )
            .catch((err) => {
                console.log(err)
            }
            )
        
        console.log(JSON.stringify(responseBody))
	//Form submission happens here
    }
    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }
    
  
    return(
        <>
        <SimpleNav/>
        <div className="container is-max-desktop">
        
            <div className="tile is-parent">
            <div className="tile is-child notification is-info">
                    <p className="title">Sign up</p>
                    <p className="subtitle">Email authentication necessary. First step to create your own digital diary!</p>

            
        <form onSubmit={onSubmitHandler}>
        <div className="field">
            <div><label htmlFor="name">First Name</label></div>
            <div><input className="input" id="name" onChange={(e)=>inputChangeHandler(setName, e)} type="text"/></div>
        </div>
        <div className="field">
            <div><label htmlFor="email">Email</label></div>
            <div><input id="email" className="input" onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/></div>
        </div>
        <div className="field">
            <div><label htmlFor="password">Password</label></div>
            <div><input id="password" className="input" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/></div>
        </div>
            <button type="submit" className="button is-success">Sign up</button>
            <button to="/login" className="button is-success">Login</button>
        </form>
        
        </div>
        </div>
        
        </div>

        </>
    )
}


/*

this is the old styled form →

import '../App.css';
import SimpleNav from '../components/Simplenav';
import { useState } from 'react';
export default function Signup() {
    const [test, setTest]               = useState({});
    function formCatch(data){
        const responive                     =  axios.get('http://localhost:3200/signup') //change here before pushing to cloud -> https://mighty-dusk-25399.herokuapp.com/
        .then(function (response) {
          // Condition to check if data is fetched or not
            setTest(response.data);
        })
        if (test){
            return <div>Sign up done...</div>
        }

    
    }
    return (
        <>
        <SimpleNav/>
        <main style={{ padding: "1rem 0" }}>

        </main>
        <div className="container is-max-desktop">
        

        </div>
        </>
    );
}





////////// this is the styled form part //////////////

        <div className="tile is-ancestor">
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                    <p className="title">Sign up</p>
                    <p className="subtitle">Email authentication necessary. First step to create your own digital diary!</p>

                    <form method="POST" action="/signup" onSubmit={formCatch}>

                    <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" name="name" type="test" placeholder="Full name"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                                </span>
                            </p>
                    </div>
                    <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" name="email" placeholder="Email"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                                </span>
                            </p>
                    </div>
                    <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" name="password"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>

                    <button type="submit" onClick={formCatch} className="button is-success">Login</button>

                </form>

                </article>
            </div>
        </div>

*/        