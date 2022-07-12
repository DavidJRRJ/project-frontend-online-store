import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await data.json();
    this.setState({ product: result });
    console.log(result);
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, id } = product;
    return (
      <div data-testid="product-detail-name">
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <h3>{title}</h3>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => {
            const cartID = JSON.parse(localStorage.getItem('cart') || '[]');
            cartID.push({
              id,
              title,
            });
            localStorage.setItem('cart', JSON.stringify(cartID));
          } }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default ProductDetails;
