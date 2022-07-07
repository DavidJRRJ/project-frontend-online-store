import React from 'react';
import { getCategories } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map(({ name, id }) => (
          <li
            key={ id }
          >
            <button data-testid="category" type="button">{name}</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoriesMenu;
