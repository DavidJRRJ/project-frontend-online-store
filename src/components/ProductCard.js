import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumb, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumb } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
