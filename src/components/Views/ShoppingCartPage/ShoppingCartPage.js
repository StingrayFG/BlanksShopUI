import React from 'react';
import { Navigate } from 'react-router-dom';

import './ShoppingCartPage.styles.css'

import store from "store";
import api from 'api';
import ProductTable from 'components/tables/Product/ProductTable';
import service from './ShoppingCartPage.service'

class ShoppingCartPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;

    this.createOrder = this.createOrder.bind(this);
    this.getCart = this.getCart.bind(this);
    this.manualUpdate = this.manualUpdate.bind(this);
  };

  componentDidMount() {
    this.getCart();
  }

  async getCart() {
    await service.getCart()
        .then(res => {
            this.setState({
                posts: res
            })
            this.setState({isMounted: true})
        })
        .catch(error => console.error(error))
        this.forceUpdate();
  }

  async createOrder()
  {
    if ((store.getState().user.id !== 0) && (this.state.posts.products.length !== 0))
    {
      await service.createOrder()
        .then(res =>
          {
            if (!res.ok) {
              alert("Something went wrong, try again later")}
            else {
              alert("Order created")
              this.setState({isCreated: true})}
          }
        )
    }
    else
    {
      alert("Something went wrong, try again later")
    }
  }

  manualUpdate()
  {
    this.forceUpdate();
  }

  render() {
    if (this.state.isMounted === false) return null;
    else if (this.state.isCreated === true) 
      return( 
        <Navigate replace to="/catalog" />    
      )
    else if (store.getState().user.id !== 0){
      if (this.state.posts != null){
        return(
          <div className="std">
            <h2>
            Cart
            </h2>
            <ProductTable mode="cart" products={this.state.posts.products} updateTable={this.getCart}/>
  
            <div className='summary'>
              <p className='cart-price'>In total: {this.state.price}</p> 
              <button className='cart-confirm-button' onClick={this.createOrder}><p className='button-text'>Create order</p></button>
            </div>
            
          </div>           
        )
      }
      else {
        return (
        <div className="std">
            <h2>
            Cart 
            </h2>
            <p>Cart is empty</p>
        </div>  
        )
      }
    }
  }
}

export default ShoppingCartPage;