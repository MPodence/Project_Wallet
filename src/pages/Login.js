import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  state = {
    isButtonDisabled: true,
  }

   handleChange = (event) => {
     this.setState({ [event.target.id]: event.target.value });
     this.buttonValidation();
   }

   buttonValidation = () => {
     const minChar = 6;
     if (senha.value.length
      >= minChar
      && email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
       this.setState({ isButtonDisabled: false });
     } else {
       this.setState({ isButtonDisabled: true });
     }
   }

   handleButton = () => {
     const { history, dispatch } = this.props;
     dispatch(saveEmail(email.value));
     history.push('/carteira');
   }

   render() {
     const { isButtonDisabled } = this.state;
     return (
       <>
         <label htmlFor="email">
           Email:
           <input
             type="email"
             onChange={ this.handleChange }
             data-testid="email-input"
             id="email"
           />
         </label>

         <label htmlFor="senha">
           Senha:
           <input
             type="password"
             required
             onChange={ this.handleChange }
             data-testid="password-input"
             id="senha"
           />
         </label>

         <button
           type="submit"
           disabled={ isButtonDisabled }
           onClick={ this.handleButton }
         >
           Entrar
         </button>
       </>
     );
   }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
