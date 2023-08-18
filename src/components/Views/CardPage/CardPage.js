import React from 'react';
import ProductTable from 'components/tables/Product/ProductTable';

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
        {this.state.posts.name.slice(0,1).toUpperCase() + 
        this.state.posts.name.slice(1, this.state.posts.name.length)}&nbsp;
        {this.state.posts.materialName}
        </h2>
        <ProductTable mode="page" products={this.state.posts.products}/>
      </div>           
    )}
}

export default CardPage;