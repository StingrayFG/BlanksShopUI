import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';

import Menu from './components/layout/NavBar/Menu/Menu.js';
import CatalogPage from './components/views/CatalogPage/CatalogPage.js';
import CardPage from './components/views/CardPage/CardPage';
import CardPageWrap from './components/views/CardPage/CardPageWrap';
import PaymentsInfo from './components/views/Information/PaymentsInfoPage/PaymentsInfoPage';
import ShoppingCartPage from './components/views/ShoppingCartPage/ShoppingCartPage';
import ContactsInfo from './components/views/Information/ContactsInfoPage/ContactsPage';
import LoginPage from './components/views/Account/LoginPage/LoginPage';
import SignUpPage from './components/views/Account/SignUpPage/SignUpPage';


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
              <Route path="/catalog" element={<CatalogPage user={this.state.user}/>} />
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