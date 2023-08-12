import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';

import Menu from './components/Layout/NavBar/Menu';
import Catalog from './components/Views/CatalogPage/CatalogPage';;
import CardPageWrap from './components/Views/CardPage/CardPageWrap';
import PaymentsInfo from './components/Views/Information/PaymentsInfoPage/PaymentsInfoPage';
import ShoppingCartPage from './Views/ShoppingCartPage/ShoppingCartPage';
import ContactsInfo from './components/Views/Information/ContactsInfoPage/ContactsPage';
import LoginPage from './components/Views/Account/LoginPage/LoginPage';
import SignUpPage from './components/Views/Account/SignUpPage/SignUpPage';


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