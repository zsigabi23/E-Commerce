import React, { useState } from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // This stops the refresh
        //Login logic

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage
            history.push('/');
        })
        .catch(e => alert(e.message))
    };

    const register = event => {
        event.preventDefault(); // This stops the refresh
        //Register logic

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //craeted a user and logged in
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            =<Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""/>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to M-tag's Conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice and our Interests-Based ads 
                    Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your M-tag Account</button>
            </div>
        </div>
    )
}

export default Login
