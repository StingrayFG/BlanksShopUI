import './css/App.css';
import './css/Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

class LoginMenu extends React.Component {

  render() {
    if (this.props.user.id == 0){
      return(
        <span>
          <Link to="/signup" className="link-menu"><button className='link-button right'>Регистрация</button></Link> 
          <Link to="/account" className="link-menu"><button className='link-button right'>Войти</button></Link>     
        </span>
      )
    }
    else if (this.props.user.id != 0){
      return(
        <Link to="/account" className="link-menu-right"><button className='link-button right'>Аккаунт</button></Link> 
      )
    }
  }
}


export default LoginMenu;