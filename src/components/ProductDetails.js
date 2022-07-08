import React from 'react';
import PropTypes from 'prop-types';

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
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product-detail-name">
        <h3>{title}</h3>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default ProductDetails;
