import React from 'react';

class FormCart extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Nome Completo" data-testid="checkout-fullname" />
        <input type="text" placeholder="Email" data-testid="checkout-email" />
        <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
        <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
        <input type="text" placeholder="CEP" data-testid="checkout-cep" />
        <input type="text" placeholder="Endereço" data-testid="checkout-address" />
        <button type="button" data-testid="checkout-products">Checkout</button>
      </form>
    );
  }
}

export default FormCart;
