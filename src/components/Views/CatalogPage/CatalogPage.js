import './css/App.css';
import './css/Card.css';
import React from 'react';
import Card from '../Product/Card';

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: {}};
    this.state.isMounted = false;
    
  };

  componentDidMount() {
    fetch('https://localhost:44325/metalblanks/get_cards')
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
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
          
          {this.state.posts.cards.map((element) => (
            <Card json={element} user={this.props.user}></Card>
          ))}

        </div>   
    )}
}

export default Catalog;