import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductCard from './ProductCard';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      results: [],
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
    // console.log(categories.map((p) => p.id));
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
    const result = await getProductsFromCategoryAndQuery('', queryInput);
    this.setState({
      results: result.results,
    });
  }

  handleClickMenu = async (id) => {
    // const { categories } = this.state;
    // const categoriesId = categories.map((p) => p.id);
    const result = await getProductsFromCategoryAndQuery(id, '');
    // console.log(result.results);
    this.setState({
      results: result.results,
    });
  }

  render() {
    const { results, categories } = this.state;
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
        {categories.map(({ id, name }) => (<CategoriesMenu
          key={ id }
          name={ name }
          click={ () => this.handleClickMenu(id) }
        />))}
        {results.map(({ title, price, thumbnail, id }) => (
          <ProductCard
            key={ id }
            title={ title }
            price={ price }
            thumb={ thumbnail }
            id={ id }
          />
        ))}
      </div>
    );
  }
}

export default Home;
