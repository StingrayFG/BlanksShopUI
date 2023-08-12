import './css/App.css';
import React from 'react';
import './css/Menu.css';
import { Link } from 'react-router-dom';

class LoginInfo extends React.Component {

  render() {
    if (this.props.user.id == 0){
      return(
        <span>
          <Link to="/signup" className="link-menu-right">Sign Up</Link> 
          <Link to="/account" className="link-menu-right">Log In</Link>     
        </span>
      )
    }
    else if (this.props.user.id != 0){
      return(
        <span>
          <Link to="/account" className="link-menu-right">Account</Link> 
          <Link to="/cart" className="link-menu-right">Cart</Link>  
        </span>
      )
    }
  }
}


export default LoginInfo;