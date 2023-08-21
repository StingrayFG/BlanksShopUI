import React from 'react';

import 'components/tables/Product/ProductTable.styles.css';

import api from 'api';
import store from 'store';

class Product extends React.Component {
  
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

  async addBlankToCart()
  {
    if(store.getState().user.id == 0)
    {
      alert("You have to log in first!")
    }
    else
    {
      const requestOptions = {
        method: 'POST',
      };
      //console.log(this.state.posts);
      const res = await fetch(api.baseUrl + 'shoppingcart/add/product?customerID=' + store.getState().user.id + '&productID=' + 
      this.state.posts.id, requestOptions)
        .then(this.state.posts.count -= 1)
      this.forceUpdate();
    }
  }

  async removeBlankFromCart()
  {
    if (store.getState().user.id != 0)
    {
      const requestOptions = {
        method: 'DELETE',
      };
      //console.log(this.state.posts);
      const res = await fetch(api.baseUrl + 'shoppingcart/delete/product?customerID=' + store.getState().user.id + '&productID=' + this.state.posts.id, requestOptions)
      this.props.updateTable();
      this.forceUpdate();
    }
  }

  render() {
    if (this.state.isMounted == false) return null;
    else if (this.props.mode == "page") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.height}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td> 
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.addBlankToCart}><p>Add to cart</p></button>
        </td>
      </tr>        
    )
    else if (this.props.mode == "cart") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">
          {this.state.posts.name.slice(0,1).toUpperCase() + 
          this.state.posts.name.slice(1, this.state.posts.name.length)}&nbsp;
          {this.state.posts.material.name}
        </p></td>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.height}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td>  
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.removeBlankFromCart}><p>Remove</p></button>
        </td>
      </tr>  
    )
    else if (this.props.mode == "order") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">
          {this.state.posts.name.slice(0,1).toUpperCase() + 
          this.state.posts.name.slice(1, this.state.posts.name.length)}&nbsp;
          {this.state.posts.material.name}
        </p></td>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.height}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td>  
      </tr>  
    )
    else return(
        <p className="link-product">{this.state.posts.dimensions.width}x{this.state.posts.dimensions.height}x{this.state.posts.dimensions.length}</p>        
    )
  }
}


export default Product;