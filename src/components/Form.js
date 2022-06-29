import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import getCurrenciesAPI from '../services/fetchAPI';
import { saveForm } from '../actions';

class Form extends React.Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

   handleButton = async (event) => {
     event.preventDefault();
     const {
       value,
       description,
       currency,
       method,
       tag,
     } = this.state;
     const { dispatch } = this.props;
     const respAPI = await getCurrenciesAPI();
     await dispatch(saveForm({
       value,
       description,
       currency,
       method,
       tag,
       exchangeRates: respAPI,
     }));
     this.setState({ value: 0 });
   }

   render() {
     const { currenciesFromState } = this.props;
     const { value, description, currency, method, tag } = this.state;
     return (
       <form>
         {/* Despesa input */}
         <label htmlFor="value">
           Valor da Despesa:
           <input
             id="value"
             value={ value }
             data-testid="value-input"
             onChange={ this.handleChange }
           />
         </label>
         {/* descrição input */}
         <label htmlFor="description">
           <input
             id="description"
             value={ description }
             data-testid="description-input"
             onChange={ this.handleChange }
           />
         </label>
         {/* moedas */}
         <label htmlFor="currency">
           Moeda
           <select
             id="currency"
             value={ currency }
             onChange={ this.handleChange }
           >
             { currenciesFromState.map((moeda) => (
               <option key={ moeda } value={ moeda }>{ moeda }</option>
             )) }
           </select>
         </label>
         {/* metodo pagamento */}
         <label htmlFor="method">
           Forma de pagar:
           <select
             id="method"
             value={ method }
             data-testid="method-input"
             onChange={ this.handleChange }
           >
             <option value="Dinheiro">Dinheiro</option>
             <option value="Cartão de crédito">Cartão de crédito</option>
             <option value="Cartão de débito">Cartão de débito</option>
           </select>
         </label>
         {/* categoria da despesa */}
         <label htmlFor="tag">
           Tipo de despesa:
           <select
             id="tag"
             value={ tag }
             data-testid="tag-input"
             onChange={ this.handleChange }
           >
             <option value="Alimentação">Alimentação</option>
             <option value="Lazer">Lazer</option>
             <option value="Trabalho">Trabalho</option>
             <option value="Transporte">Transporte</option>
             <option value="Saúde">Saúde</option>
           </select>
         </label>
         {/* button submit */}
         <button type="submit" onClick={ this.handleButton }>Adicionar despesa</button>
       </form>
     );
   }
}

const mapStateToProps = (state) => ({
  currenciesFromState: state.wallet.currencies,
});

Form.propTypes = {
  currenciesFromState: PropTypes.arrayOf(string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Form);
