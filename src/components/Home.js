import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      results: [],
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    // console.log(value);
    this.setState({
      queryInput: value,
    });
  }

  handleClick = async () => {
    const { queryInput } = this.state;
    const result = await getProductsFromCategoryAndQuery({ query: queryInput });
    this.setState({
      results: result.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <input type="text" data-testid="query-input" onChange={ this.handleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar

        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <CategoriesMenu />
        {results.map(({ title, price, thumbnail, id }) => (
          <div key={ id } data-testid="product">
            <h3>{title}</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
