import React from 'react';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rate: 0,
      text: '',
    };
  }

  componentDidMount() {
    const form = JSON.parse(localStorage.getItem('form') || '[]');
    this.setState({
      form,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    //   console.log({ [name]: value });
    this.setState({
      [name]: value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { email, rate, text } = this.state;
    //   console.log({ email, rate, text });
    const form = JSON.parse(localStorage.getItem('form') || '[]');
    form.push({ email, rate, text });
    this.setState({
      form,
    });
    // console.log();
    localStorage.setItem('form', JSON.stringify(form));
  };

  render() {
    const { form } = this.state;
    return (
      <div>
        <section>
          <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            data-testid="product-detail-email"
          />
          <input
            type="radio"
            value={ 1 }
            name="rate"
            onChange={ this.handleChange }
            data-testid="1-rating"
          />
          <input
            type="radio"
            value={ 2 }
            name="rate"
            onChange={ this.handleChange }
            data-testid="2-rating"
          />
          <input
            type="radio"
            value={ 3 }
            name="rate"
            onChange={ this.handleChange }
            data-testid="3-rating"
          />
          <input
            type="radio"
            value={ 4 }
            name="rate"
            onChange={ this.handleChange }
            data-testid="4-rating"
          />
          <input
            type="radio"
            value={ 5 }
            name="rate"
            onChange={ this.handleChange }
            data-testid="5-rating"
          />
          <textarea
            name="text"
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="submit-review-btn"
          >
            Submit
          </button>
        </section>
        <section>
          {!form ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          ) : (
            form.map(({ email, rate, text }) => (
              <div key={ email }>
                <p>{email}</p>
                <p>{rate}</p>
                <p>{text}</p>
              </div>
            ))
          )}
        </section>
      </div>
    );
  }
}

export default Comments;
