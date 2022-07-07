import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    // handleclick = () => {

    // };

    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
      </div>
    );
  }
}

export default Home;
