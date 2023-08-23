import React from 'react';

import ProductCard from '../Product/Card'

import api from 'api';
import service from './CatalogPage.service'

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cards: {}};
    this.state.isMounted = false;
    
    this.getCards = this.getCards.bind(this);
  };

  componentDidMount() {
    this.getCards()
  }

  async getCards(){
    await service.getCards()
      .then(res => {
          this.setState({
              cards: res
          })
          this.setState({isMounted: true})
      })
      .catch(error => console.error(error))
  }

  render() {
    if (this.state.isMounted == false) return null;
    else return(
        <div className="catalog std">  
          <h2>Catalog</h2>
          
          {this.state.cards.map((element) => (
            <ProductCard key={element.id} json={element}></ProductCard>
          ))}

        </div>   
    )}
}

export default Catalog;