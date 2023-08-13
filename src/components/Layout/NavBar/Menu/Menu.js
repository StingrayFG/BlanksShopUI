import React from 'react';
import { Link } from "react-router-dom";

import LoginInfo from '../LoginInfo/LoginInfo';

import '../Menu.styles.css';

class Menu extends React.Component {

    componentDidUpdate() {
        //console.log(this.props)
    }

    render(){
        return(
        <div className="menu std">
            <span>
                <Link to="/catalog" className="link-menu">Catalog</Link>
                <Link to="/payments" className="link-menu">Payments</Link>
                <Link to="/contacts" className="link-menu">Contact Us</Link> 
            </span>
            <LoginInfo user={this.props.user}/>
        </div>
    )}
}

export default Menu;
