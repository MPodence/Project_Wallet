import PropTypes, { string, objectOf } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>
                  { expense.exchangeRates[expense.currency]
                    .name.replace('/Real Brasileiro', '') }
                </td>
                <td>
                  { Number(expense.exchangeRates[expense.currency]
                    .ask).toFixed(2) }

                </td>
                <td>
                  { Number(expense.value * expense.exchangeRates[expense.currency]
                    .ask).toFixed(2) }
                </td>
                <td>Real</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(objectOf(string)).isRequired,
};

export default connect(mapStateToProps)(Table);
