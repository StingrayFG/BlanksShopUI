import './css/App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import Menu from './Menu';
import Catalog from './Catalog';
import CardPage from './CardPage';
import CardPageWrap from './CardPageWrap';
import PaymentsInfo from './PaymentsInfo';
import LoginInfo from './LoginInfo';
import ShoppingCartPage from './ShoppingCartPage';
import ContactsInfo from './ContactsInfo';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

import {LoginContext} from './LoginContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: {id: 0}}
  
    this.setUser = this.setUser.bind(this);
  };

  setUser(res){
    this.state.user = res;
    this.forceUpdate()
    console.log('user data has changed');
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <BrowserRouter>
            <Menu user={this.state.user}/>
            <Routes>   
              <Route path="/" element={<Navigate replace to="/catalog" />} />
              <Route path="/catalog" element={<Catalog user={this.state.user}/>} />
              <Route path="/product" element={<CardPageWrap user={this.state.user}/>} />
              <Route path="/payments" element={<PaymentsInfo />} /> 
              <Route path="/contacts" element={<ContactsInfo />} /> 
              <Route path="/account" element={<LoginPage setUser={this.setUser} user={this.state.user}/>} />    
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/cart" element={<ShoppingCartPage user={this.state.user}/>} />    
            </Routes>
          </BrowserRouter>
      </div> 
    );
  }
}


export default App;