import React from 'react';
import FormCart from './FormCart';
import ProductCardCart from './ProductCardCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      counter: Number(1),
    };
  }

  async componentDidMount() {
    // const { product } = this.state;
    const cartId = JSON.parse(localStorage.getItem('cart'));
    console.log(cartId);
    // const data = await fetch(`https://api.mercadolibre.com/items/${cartId.id}`);
    // const result = await data.json();
    this.setState({ product: cartId });
    // console.log(product[0]);
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
    const { product } = this.state;
    // const { title } = product;
    return (
      <div>
        {!product
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : product.map((productStored) => (
            <ProductCardCart key={ productStored.id } product={ productStored } />
          ))}
        <FormCart />
      </div>
    );
  }
}

export default Cart;
