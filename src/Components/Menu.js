import React, { useState, useEffect } from 'react';
import '../Master.scss';
import { useGlobalState } from '../Hooks/useGlobalState';
import { Redirect } from 'react-router-dom';
import useKeyPress from '../Hooks/useKeyPress';
import userAPI from '../API/User';

function Menu() {
    const [menuActive, setMenuActive] = useGlobalState('menuActive');
    const [user, setUser] = useGlobalState('user');
    const [login, setLogin] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameTwo, setUsernameTwo] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const enterKeyPress = useKeyPress('Enter');
    const [redirect, setRedirect] = useGlobalState('redirect');
    const [failedLogin, setFailedLogin] = useState(false);
    const [failedRegistration, setFailedRegistration] = useState(false);
    const [userRegistered, setUserRegistered] = useState(false);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const loginHandler = async () => {
        if (username && password) {
            const login = await userAPI.login({identifier: username, password: password});
            if (login) {
                setRedirect('/')
            }
            else {setFailedLogin(true)}
        }
        console.log('logging in')
    }

    const register = async () => {
        // Verification of valid signup data
        if ((username) && username === usernameTwo && (password) && password === passwordTwo && password.length >= 8) {
            console.log('registering user');
            setFailedRegistration(false);
            setUserRegistered(true);
            const registration = await userAPI.register({'email': username, 'password': password});
            if (registration) {
                setUserRegistered(true)
            }
        } else {
            console.log('failed registration checks')
            setFailedRegistration(true)
        }
    }

    const signOut = async () => {
        console.log('signing out user')
        const loggedOut = await userAPI.signout();
        setMenuActive(false);
        setRedirect('/');
        // if (loggedOut) {
        // }

    }

    // Initiate login if a user presses enter
    useEffect(() => {
        if (enterKeyPress) {loginHandler()}
    }, [enterKeyPress])

    useEffect(() => {
        return () => {setRedirect(null)}
    }, [])

    // Navigations
    if (redirect) {
        let url = redirect;
        return <Redirect to={url} />
    }

    return (
        <div id="menu-modal" style={{display: menuActive ? 'grid' : 'none'}}>
            {menuActive ? <>
                {user ? <>
                <div id="menu-options">
                    <button>View Favourites</button>
                    <button>Account Details</button>
                    <button onClick={signOut}>Sign Out</button>
                </div>
                </> : <>
                    <div id="menu-options">
                        <div id="loginForm">
                            <span className="input-container">
                                <h5>Email:</h5>
                                <input value={username} placeholder="miranda@gmail.com" onChange={event => setUsername(event.target.value)} type="email"/>
                            </span>

                            {/* Extra email for account creation */}
                            {createAccount ? <>
                            <span className="input-container">
                                <h5>And again:</h5>
                                <input value={usernameTwo} placeholder="miranda@gmail.com" onChange={event => setUsernameTwo(event.target.value)} type="email"/>
                                {(usernameTwo && (username != usernameTwo)) ? <p>Your emails do not match!</p> : null}
                                {(failedRegistration && (!emailRegex.test(username))) ? <p>"Please enter a valid email."</p> : null}
                            </span>
                            </>: null}

                            <span className="input-container">
                                <h5>Password: {createAccount ? '(min 8 characters)' : null}</h5>
                                <input value={password} onChange={event => setPassword(event.target.value)}  type="password"/>
                            </span>

                            {/* Extra password for account creation */}
                            {createAccount ? <>
                            <span className="input-container">
                                <h5>And again:</h5>
                                <input value={passwordTwo} onChange={event => setPasswordTwo(event.target.value)}  type="password"/>
                                {(passwordTwo && (password != passwordTwo)) ? <p> "Your passwords do not match!"</p> : null}
                                {(failedRegistration && (password.length < 8)) ? <p>Please enter 8 characters.</p> : null}
                            </span>
                            </> : null }
                        </div>
                        { !createAccount ? <>
                             <button onClick={() => setLogin(true)}>Log In</button>
                             <button onClick={() => setCreateAccount(true)}>Create Account</button>
                        </> :<button onClick={register}>Submit</button>}
                        {failedLogin ? <h5>Your login was unsuccessful. Please try again.</h5> : null}
                    </div>
                </>}
            </> : null }
        </div>
    )
} 

export default Menu;