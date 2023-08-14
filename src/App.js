import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';

import Menu from './components/layout/NavBar/Menu/Menu.js';
import CatalogPage from './components/views/CatalogPage/CatalogPage.js';
import CardPage from './components/views/CardPage/CardPage';
import CardPageWrap from './components/views/CardPage/CardPageWrap';
import PaymentsInfo from './components/views/Information/PaymentsInfoPage/PaymentsInfoPage';
import ShoppingCartPage from './components/views/ShoppingCartPage/ShoppingCartPage';
import ContactsInfo from './components/views/Information/ContactsInfoPage/ContactsPage';
import LoginPage from './components/views/User/LoginPage/LoginPage';
import SignUpPage from './components/views/User/SignUpPage/SignUpPage';
import AccountPage from 'components/views/User/AccountPage/AccountPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  };

  render(){
    return (
      <div>
        <BrowserRouter>
            <Menu/>
            <Routes>   
              <Route path="/" element={<Navigate replace to="/catalog" />} />
              <Route path="/catalog" element={<CatalogPage/>} />
              <Route path="/product" element={<CardPageWrap/>} />
              <Route path="/payments" element={<PaymentsInfo />} /> 
              <Route path="/contacts" element={<ContactsInfo />} /> 
              <Route path="/login" element={<LoginPage/>} />    
              <Route path="/signup" element={<SignUpPage/>} />
              <Route path="/account" element={<AccountPage/>} />
              <Route path="/cart" element={<ShoppingCartPage/>} />    
            </Routes>
          </BrowserRouter>
      </div> 
    );
  }
}


export default App;