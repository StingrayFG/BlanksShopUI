import React from 'react';

import 'components/tables/Product/ProductTable.styles.css';

import api from 'api';
import store from 'store';
import service from './Product.service'

class Product extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  };

  componentDidMount() {
    this.setState({
      posts: this.props.json
    })
    this.setState({
      isMounted: true
    })
  };

  async addToCart()
  {
    if(store.getState().user.id === 0)
    {
      alert("You have to log in first!")
    }
    else
    {
      await service.addToCart(store.getState().user.id, this.state.posts.id)
      //.then(this.state.posts.count -= 1)
      this.forceUpdate();
    }
  }

  async removeFromCart()
  {
    if (store.getState().user.id !== 0)
    {
      await service.removeFromCart(store.getState().user.id, this.state.posts.id)
      this.props.updateTable();
      this.forceUpdate();
    }
  }

  async updateCount(newCount)
  {
    await service.updateCount(store.getState().user.id, this.state.posts.id, newCount)
  }

  async incrementCount()
  {
    if (this.state.posts.count < 10)
    {
      await this.updateCount(this.state.posts.count + 1)
        .then(
          this.state.posts.count += 1,
          this.forceUpdate()
        )  
    }   
    console.log(this.state.posts.count)
  }

  async decrementCount()
  {
    if (this.state.posts.count > 1)
    {
      await this.updateCount(this.state.posts.count - 1)
        .then(
          this.state.posts.count -= 1,
          this.forceUpdate()
        )   
    }  
    console.log(this.state.posts.count)
  }

  render() {
    if (this.state.isMounted === false) return null;
    else if (this.props.mode === "page") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}x{this.state.posts.dimensions.height}x{this.state.posts.dimensions.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td> 
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.addToCart}><p  className='button-text'>Add to cart</p></button>
        </td>
      </tr>        
    )
    else if (this.props.mode === "cart") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">
          {this.state.posts.productType.name.slice(0,1).toUpperCase() + 
          this.state.posts.productType.name.slice(1, this.state.posts.productType.name.length)}&nbsp;
          {this.state.posts.material.name}
        </p></td>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}x{this.state.posts.dimensions.height}x{this.state.posts.dimensions.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell">
          
          <button className="product-count-button-left" onClick={this.decrementCount}><p className='button-text'>-</p></button>
          <p className="product-count">{this.state.posts.count}</p> 
          <button className="product-count-button-right" onClick={this.incrementCount}><p className='button-text'>+</p></button>
          
        </td> 
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.removeFromCart}><p className='button-text'>Remove</p></button>
        </td>
      </tr>  
    )
    else if (this.props.mode === "order") return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">
          {this.state.posts.productType.name.slice(0,1).toUpperCase() + 
          this.state.posts.productType.name.slice(1, this.state.posts.productType.name.length)}&nbsp;
          {this.state.posts.material.name}
        </p></td>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.dimensions.width}x{this.state.posts.dimensions.height}x{this.state.posts.dimensions.length}</p></td>  
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