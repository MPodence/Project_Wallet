import React from 'react';
import PropTypes, { objectOf, string } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  getTotalExpenses = () => {
    let totalExpenses = 0;
    const { expensesFromState } = this.props;
    if (expensesFromState.length > 0) {
      expensesFromState.forEach((expense) => {
        const { currency } = expense;
        const convertValue = expense.exchangeRates[currency].ask;
        totalExpenses += Number(expense.value) * Number(convertValue);
      });
      const totalInStringWithDecimal = totalExpenses.toFixed(2);
      return totalInStringWithDecimal;
    } return '0';
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <p data-testid="total-field">{ this.getTotalExpenses() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expensesFromState: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expensesFromState: PropTypes.arrayOf(objectOf(string)).isRequired,
};

export default connect(mapStateToProps)(Header);
