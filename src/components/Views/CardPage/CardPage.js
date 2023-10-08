import React from 'react';

import ProductTable from 'components/tables/Product/ProductTable';

import './CardPage.styles.css'
import ProductSVG from './ProductSVG';

class CardPage extends React.Component {

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
      <div className="std">
        <h2>
        {this.state.posts.productType.name.slice(0,1).toUpperCase() + 
        this.state.posts.productType.name.slice(1, this.state.posts.productType.name.length)}&nbsp;
        {this.state.posts.material.name}
        </h2>

        <ProductSVG type={this.state.posts.productType.name} material={this.state.posts.material.name}></ProductSVG>

        <div className='card-info'>        
          <p className='card-info-text'>{this.state.posts.productType.description}</p>
          <p className='card-info-text'>{this.state.posts.material.description}</p>
        </div>

        <ProductTable mode="page" products={this.state.posts.products}/>
      </div>           
    )}
}

export default CardPage;