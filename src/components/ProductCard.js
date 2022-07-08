import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, thumb, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={ thumb } alt={ title } />
          <p>{price}</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
