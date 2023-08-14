import React from 'react';
import { Navigate } from 'react-router-dom';

import Product from '../Product/Product'

import './ShoppingCartPage.styles.css'

import store from "store";
import api from 'api';


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
    const res = await fetch(api.baseUrl + 'shoppingcart/get/currentbycustomer?customerID=' + store.getState().user.id)
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
            })
            this.setState({isMounted: true})
        })
        .catch(error => console.error(error))
        this.forceUpdate();
  }

  createOrder()
  {
    if ((store.getState().user.id != 0) && (this.state.posts.products.length != 0))
    {
      const requestOptions = {
        method: 'POST',
      };
      console.log(this.state.posts);
      fetch(api.baseUrl + 'order/add?customerID=' + store.getState().user.id + '&paymentMethod=cash', requestOptions)
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
  }

  manualUpdate()
  {
    this.forceUpdate();
  }

  render() {
    if (this.state.isMounted == false) return null;
    if (this.state.isCreated == true) 
      return( 
        <Navigate replace to="/catalog" />   
      )
    else if (store.getState().user.id != 0){
      return(
        <div className="std">
          <h2>
          Cart
          </h2>
          <table className="products-table">
            <tbody>
              <tr>
                <td className="products-table-type-cell"><p>Type</p></td>
                <td className="products-table-cell"><p>Width</p></td>
                <td className="products-table-cell"><p>Height</p></td>
                <td className="products-table-cell"><p>Length</p></td>
                <td className="products-table-cell"><p>Price</p></td>
                <td className="products-table-cell"><p>Count</p></td>
              </tr> 
              {this.state.posts.products.map((element) => (
                <Product key={element.id} json={element} cart_mode={true} updateTable={this.getCart}></Product>
              ))}
            </tbody>
          </table>
  
          <button className='cart-confirm-button' onClick={this.createOrder}><p>Create order</p></button>
          <p className='cart-price'>In total: {this.state.posts.totalPrice}</p> 
        </div>           
      )}
  }
}

export default ShoppingCartPage;