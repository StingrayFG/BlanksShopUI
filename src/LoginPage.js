import './css/App.css';
import React from 'react';
import  { Redirect, useHistory } from 'react-router-dom'
import './css/LoginPage.css';
import {useState, useEffect} from 'react';

const LoginPage = (props) => {

  const tryLogin = (event) => {
    event.preventDefault()
    fetch('https://localhost:44325/customers/get_by_login?phoneNumber=' + login + '&password=' + password)
        .then(res => res.json())
        .then(res => {
          props.setUser(res)
          console.log(res)     
        })
        .catch(error => console.error(error))   
  }

  const logOut = () => {
    props.setUser({id: 0});
    setLogin("");
    setPassword("");
  }

  const [login, setLogin] = useState("");
  const handleLoginChange = event =>{
    let login = event.target.value;
    console.log(event.target.value); 
    setLogin(login);
  } 

  const [password, setPassword] = useState("");
  const handlePasswordChange = event =>{
    let password = event.target.value;
    console.log(event.target.value); 
    setPassword(password);
  } 

  if (props.user.id == 0){
    return(
      <div className="std">
        <h2>Account</h2>
        <div className="login-window">
        <form onSubmit = {tryLogin}>
          <label>
            <p>Phone Number</p>
            <input value={login} onChange={handleLoginChange} type="text" />
          </label>
          <label>
            <p>Password</p>
            <input value={password} onChange={handlePasswordChange} type="password" />
          </label>
          <div>
            <button><p>Log In</p></button>
          </div>
        </form>
        </div>
      </div>
  )}
  else if (props.user.id != 0){
    return(
      <div className="std">
        <h2>Account</h2>
        <h2>{props.user.name}</h2>
        <button onClick={logOut}><p>Log Out</p></button>
      </div>
  )}
}

export default LoginPage;

