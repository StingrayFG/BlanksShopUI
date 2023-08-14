import React from 'react';
import { Link } from 'react-router-dom';

import './Card.styles.css'

import Product from './Product';

class Card extends React.Component {

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
    if (this.state.isMounted == false) return null;
    else return(
      <div className="card">
        <table className="card-table">
          <tbody>
            <tr>
              <td className="card-header" colSpan="2">
                <Link to="/product" state={this.props} className="link-card">
                {this.state.posts.name.slice(0,1).toUpperCase() + 
                this.state.posts.name.slice(1, this.state.posts.name.length)}&nbsp;
                {this.state.posts.materialName}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="card-img">
                <img></img>
              </td>
              <td className="card-product"> 
              
              {this.state.posts.products.map(element => (
                <Product key={element.id} json={element}></Product>
              ))}

              </td>
            </tr>
          </tbody>
        </table>
      </div>           
    )}
}

export default Card;