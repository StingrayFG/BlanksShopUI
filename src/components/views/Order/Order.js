import React from 'react';

import ProductTable from 'components/tables/Product/ProductTable';

import api from 'api';
import store from 'store';


class Order extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;

    this.addBlankToCart = this.addBlankToCart.bind(this);
    this.removeBlankFromCart = this.removeBlankFromCart.bind(this);
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
    if (this.state.isMounted == false) return null;
    else return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.orderCreationDate}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <ProductTable mode="cart" products={this.state.posts.shoppingCart.products}/>
      </tr>        
    )
  }
}


export default Order;