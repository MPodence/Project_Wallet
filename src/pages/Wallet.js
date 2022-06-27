import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import getCurrenciesAPI from '../services/fetchAPI';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    const currenciesObj = await getCurrenciesAPI();
    const currenciesArray = Object.keys(currenciesObj);
    dispatch(getCurrencies(currenciesArray));
  }

  render() {
    return (
      <Header />
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
