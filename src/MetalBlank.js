import './css/App.css';
import './css/Card.css';
import './css/ProductTable.css';
import React from 'react';
import { Link } from 'react-router-dom';

class MetalBlank extends React.Component {
  
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
    if(this.props.user.id == 0)
    {
      alert("You have to log in first!")
    }
    else
    {
      const requestOptions = {
        method: 'PUT',
      };
      console.log(this.state.posts);
      const res = fetch('https://localhost:44325/shoppingcarts/add?customerID=' + this.props.user.id + '&partID=' + 
      this.state.posts.id + '&partCount=1&isProcessed=false', requestOptions)
      .then(this.state.posts.count -= 1)
      this.forceUpdate();
    }
  }

  async removeBlankFromCart()
  {
    if (this.props.user.id != 0)
    {
      const requestOptions = {
        method: 'DELETE',
      };
      console.log(this.state.posts);
      const res = await fetch('https://localhost:44325/shoppingcarts/delete_by_customer_and_part?customerID=' + this.props.user.id + 
      '&partID=' + this.state.posts.id + '&isProcessed=false', requestOptions)
      this.props.updateTable();
    }
  }

  render() {
    if (this.state.isMounted == false) return null;
    else if (this.props.page_mode == true) return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.width}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.height}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td> 
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.addBlankToCart}><p>Add to cart</p></button>
        </td>
      </tr>        
    )
    else if (this.props.cart_mode == true) return(
      <tr>
        <td className="products-table-cell"><p className="product-parameters">
          {this.state.posts.type.slice(0,1).toUpperCase() + 
          this.state.posts.type.slice(1, this.state.posts.type.length)}&nbsp;
          {this.state.posts.material}
        </p></td>
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.width}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.height}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.length}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.price}</p></td>  
        <td className="products-table-cell"><p className="product-parameters">{this.state.posts.count}</p></td>  
        <td className="products-table-button-cell">
          <button className="products-table-button" onClick={this.removeBlankFromCart}><p>Remove</p></button>
        </td>
      </tr>  
    )
    else return(
      <div>
        <p className="link-product">{this.state.posts.width}x{this.state.posts.height}x{this.state.posts.length}</p>  
      </div>        
    )
  }
}


export default MetalBlank;