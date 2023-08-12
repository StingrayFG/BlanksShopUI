import './css/App.css';
import './css/LoginPage.css';
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useState} from 'react';

const SignUpPage = (props) => {

  const createTrader = (event) => {
    event.preventDefault()
    if ((name == '') && (phoneNumber == '') && (password == ''))
    {
      alert("Please, enter information in all fields")
    }
    if ((name != '') && (phoneNumber != '') && (password != ''))
    {
      const requestOptions = {
        method: 'PUT',
      };
      
      fetch('https://localhost:44325/customers/add?name=' + name + '&phoneNumber=' + phoneNumber + '&password=' + password, requestOptions)
        .then(res =>
        {
          if (!res.ok) {
            alert("Something went wrong")}
          else {
            alert("Account created succesfully")
            setIsCreated(true)}
        }       
      )
    }
  }

  const [isCreated, setIsCreated] = useState("");

  const [name, setName] = useState("");

  const handleNameChange = event =>{
    let name = event.target.value;
    console.log(event.target.value); 
    setName(name);
  } 

  const [phoneNumber, setphoneNumber] = useState("");

  const handlephoneNumberChange = event =>{
    let phoneNumber = event.target.value;
    console.log(event.target.value); 
    setphoneNumber(phoneNumber);
  } 

  const [password, setPassword] = useState("");

  const handlePasswordChange = event =>{
    let password = event.target.value;
    console.log(event.target.value); 
    setPassword(password);
  } 

  if (isCreated == true) 
  {
    return( 
      <Navigate replace to="/account" />   
    )
  }  
  else
  {
    return(
      <div className="std">
        <h2>Sign Up</h2>
        <div className="login-window">
        <form onSubmit = {createTrader}>
          <label>
            <p>Full name</p>
            <input value={name} onChange={handleNameChange} type="text" />
          </label>
          <label>
            <p>Phone number</p>
            <input value={phoneNumber} onChange={handlephoneNumberChange} type="text" />
          </label>
          <label>
            <p>Password</p>
            <input value={password} onChange={handlePasswordChange} type="password" />
          </label>
          <div>
            <button><p>Create account</p></button>
          </div>
        </form>
        </div>
      </div>)
  }
  
}

export default SignUpPage;

