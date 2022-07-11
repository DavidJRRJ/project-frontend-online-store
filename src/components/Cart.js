import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      counter: Number(1),
    };
  }

  async componentDidMount() {
    const idd = localStorage.getItem('productId');
    const data = await fetch(`https://api.mercadolibre.com/items/${idd}`);
    const result = await data.json();
    this.setState({ product: result });
    // console.log(result);
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
    const { product, counter } = this.state;
    const { title } = product;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{Number(counter)}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleAdd }
        >
          add
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

export default Cart;
