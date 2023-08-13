import React from 'react';
import Product from '../Product/Product';

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
        <table className="products-table">
          <tbody>
            <tr>
              <td className="products-table-cell"><p>Width</p></td>
              <td className="products-table-cell"><p>Height</p></td>
              <td className="products-table-cell"><p>Length</p></td>
              <td className="products-table-cell"><p>Price</p></td>
              <td className="products-table-cell"><p>In stock</p></td>
            </tr>
            {this.state.posts.products.map(element => (
                <Product json={element} page_mode={true} user={this.props.user} updateTable={this.manualUpdate}></Product>
            ))}
              
           
            
          </tbody>
        </table>
      </div>           
    )}
}

export default CardPage;