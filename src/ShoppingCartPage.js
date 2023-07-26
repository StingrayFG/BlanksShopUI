import './css/App.css';
import './css/ShoppingCartPage.css';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MetalBlank from './MetalBlank';

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
    const res = await fetch('https://localhost:44325/shoppingcarts/get_current_cart?customerID=' + this.props.user.id)
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
            })
            this.setState({isMounted: true})
        })
        .catch(error => console.error(error))

    console.log("cart fetch");
    console.log(this.state.posts)
  }

  createOrder()
  {
    if ((this.props.user.id != 0) && (this.state.posts.metalBlanks.length != 0))
    {
      const requestOptions = {
        method: 'PUT',
      };
      console.log(this.state.posts);
      fetch('https://localhost:44325/orders/add?customerID=' + this.props.user.id + '&paymentMethod=cash', requestOptions)
        .then(res =>
          {
            if (!res.ok) {
              alert("Something went wrong")}
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
    else if (this.props.user.id != 0){
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
              {this.state.posts.metalBlanks.map(element => (
                <MetalBlank json={element} cart_mode={true} user={this.props.user} updateTable={this.getCart}></MetalBlank>
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