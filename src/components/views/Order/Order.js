import React from 'react';

import ProductTable from 'components/tables/Product/ProductTable';

import './Order.styles.css'

import api from 'api';
import store from 'store';


class Order extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;
  };

  componentDidMount() {
    this.setState({
      posts: this.props.json
    })
    this.setState({
      isMounted: true
    })
  };

  render() {
    if (this.state.isMounted === false) return null;
    else return(
      <tr className='order'>
        <td>
        <div className='order-head'>
          <span>
          <p className='order-parameter'>Created: {this.state.posts.creationDate.slice(0, 10)}</p>
          <p className='order-parameter'>Completed: {this.state.posts.creationDate.slice(0, 10)}</p>
          </span>
          <span>
          <p className='order-parameter'>Price: {this.state.posts.price}$</p>   
          <p className='order-parameter-payment'>Payment method: {this.state.posts.paymentMethod}</p>  
          </span>
          
             
        </div>
        <div className='order-products'>
          <ProductTable mode="order" products={this.state.posts.shoppingCart.products}/>
        </div>  
        </td>
      </tr> 
    )
  }
}


export default Order;