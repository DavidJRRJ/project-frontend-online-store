import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCardCart extends Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
    };
  }

handleAdd = () => {
  this.setState((prevstate) => ({
    counter: prevstate.counter + 1,
  }));
}

handleRem = () => {
  const { counter } = this.state;
  if (counter > 1) {
    this.setState((prevstate) => ({
      counter: prevstate.counter - 1,
    }));
  }
}

render() {
  const { counter } = this.state;
  const { product } = this.props;
  const { id, title } = product;
  return (
    <div key={ id }>
      <p data-testid="shopping-cart-product-name">{title}</p>
      <p data-testid="shopping-cart-product-quantity">{Number(counter)}</p>
      <button
        type="button"
        data-testid="product-increase-quantity"
        onClick={ this.handleAdd }
      >
        addd
      </button>
      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={ this.handleRem }
      >
        rem
      </button>
    </div>
  );
}
}

ProductCardCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCardCart;
