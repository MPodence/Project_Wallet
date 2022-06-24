import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
}

const user = (state = INITIAL_STATE, action) => { // o proprio erro no console me deu a dica de iniciar como null caso eu nao queira valor, ja que nao é aceito undefined.
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
