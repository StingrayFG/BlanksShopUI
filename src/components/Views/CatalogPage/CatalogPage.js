import React from 'react';

import ProductCard from '../Product/Card'
import api from '../../../api';

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cards: {}};
    this.state.isMounted = false;
    
    this.getCards = this.getCards.bind(this);
  };

  async getCards(){
    const res = await fetch(api.baseUrl + 'catalog/get/all')
      .then(res => res.json())
      .then(res => {
          this.setState({
              cards: res
          })
          this.setState({isMounted: true})
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getCards()
  }

  render() {
    if (this.state.isMounted == false) return null;
    else return(
        <div className="catalog std">  
          <h2>Catalog</h2>
          
          {this.state.cards.map((element) => (
            <ProductCard json={element} user={this.props.user}></ProductCard>
          ))}

        </div>   
    )}
}

export default Catalog;