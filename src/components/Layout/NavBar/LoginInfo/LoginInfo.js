import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import store from "store";

import '../Menu.styles.css';

const LoginInfo = () => {

  const user = useSelector(state => state.user);

  if (store.getState().user.id == 0){
    return(
      <span>
        <Link to="/signup" className="link-menu-right">Sign Up</Link> 
        <Link to="/login" className="link-menu-right">Log In</Link>     
      </span>
    )
  }
  else {
    return(
      <span>
        <Link to="/account" className="link-menu-right">Account</Link> 
        <Link to="/cart" className="link-menu-right">Cart</Link>  
      </span>
    )
  }  
}

export default LoginInfo;