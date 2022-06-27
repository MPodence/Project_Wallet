import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currenciesFromState } = this.props;
    return (
      <form>
        {/* Despesa input */}
        <label htmlFor="valor-despesa">
          Valor da Despesa:
          <input
            id="valor-despesa"
            data-testid="value-input"
          />
        </label>
        {/* descrição input */}
        <label htmlFor="desc-despesa">
          <input
            id="desc-despesa"
            data-testid="description-input"
          />
        </label>
        {/* moedas */}
        <label htmlFor="moedas">
          Moeda
          <select id="moedas">
            { currenciesFromState.map((moeda) => (
              <option key={ moeda } value={ moeda }>{ moeda }</option>
            )) }
          </select>
        </label>
        {/* metodo pagamento */}
        <label htmlFor="method">
          Forma de pagar:
          <select id="method" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        {/* categoria da despesa */}
        <label htmlFor="desp-type">
          Tipo de despesa:
          <select id="desp-type" data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromState: state.wallet.currencies,
});

Form.propTypes = {
  currenciesFromState: PropTypes.arrayOf(string).isRequired,
};

export default connect(mapStateToProps)(Form);
