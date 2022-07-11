import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  async componentDidMount() {
    const idd = localStorage.getItem('productId');
    const data = await fetch(`https://api.mercadolibre.com/items/${idd}`);
    const result = await data.json();
    this.setState({ product: result });
    console.log(result);
  }

  render() {
    const { product } = this.state;
    const { title } = product;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

export default Cart;
