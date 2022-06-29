export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_FORM = 'SAVE_FORM';

export const saveEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: userEmail,
});

export const getCurrencies = (responseAPI) => ({
  type: GET_CURRENCIES,
  payload: responseAPI,
});

export const saveForm = (formData) => ({
  type: SAVE_FORM,
  payload: formData,
});
