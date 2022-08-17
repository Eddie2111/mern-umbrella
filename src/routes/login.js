import { useState } from "react"
import React from "react";
import axios from "axios";
import '../App.css';
import SimpleNav from '../components/Simplenav';
//import Modal, { useModalState } from "react-simple-modal-provider";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [attempt, setAttempt] = useState(0);
    const [card,setCard] = useState("cardDeactive");
    const [message,setMessage] = useState("");
    const reset = ()=> {
    setTimeout(() => {
        setMessage("");
        setCard("cardDeactive");
      }, 3000);
    }
    const Ireset = ()=> {
        setMessage("");
        setCard("cardDeactive");  
        }
// consider adding captcha here
    interface FormDataType { email: email, password: string}
    const responseBody: FormDataType = { email: "", password: ""}
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.email = email
        responseBody.password = password
        
        // axios should be from here //
        if (attempt<3) {
        axios.post("https://mighty-dusk-25399.herokuapp.com/login", responseBody)
            .then(res => {
                // console.log(res.data);
                setMessage(res.data.message);
                setCard("cardActive");
                reset();
                setAttempt(attempt+1);
                if (res.data.status === 200) {
                    window.location.href = res.data.route //"/login"
                }
            }
            )
            .catch(err => {
                setMessage("not connected to network");
                setCard("cardActive");
                reset();
            })
        }
        else {
            setMessage("too many attempts");
            setCard("cardActive");
            reset();
        }
        //console.log(JSON.stringify(responseBody))
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
                    <p className="title">Login</p>
                    <p className="subtitle">Join back the crowd!</p>

            
        <form onSubmit={onSubmitHandler}>
        <div className="field">
            <div><label htmlFor="email">Email</label></div>
            <div><input id="email" className="input" onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/></div>
        </div>
        <div className="field">
            <div><label htmlFor="password">Password</label></div>
            <div><input id="password" className="input" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/></div>
        </div>
            <button type="submit" id="login" className="button is-success">Login</button>
            <a href="/forgot" className="button is-danger">Forgot Password?</a>
        </form>
        <div onClick={Ireset} className={card}>{message}</div>
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