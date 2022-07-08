import React from 'react';
import PropTypes from 'prop-types';

class CategoriesMenu extends React.Component {
  render() {
    const { name, click } = this.props;
    return (
      <ul>
        <li>
          <button type="button" onClick={ click } data-testid="category">{ name }</button>
        </li>
      </ul>
    );
  }
}

CategoriesMenu.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default CategoriesMenu;
