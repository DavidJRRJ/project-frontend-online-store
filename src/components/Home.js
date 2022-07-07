import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';

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
        <CategoriesMenu />
      </div>
    );
  }
}

export default Home;
