const getCurrenciesAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await response.json();
  delete responseJSON.USDT; // https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
  return responseJSON;
};

export default getCurrenciesAPI;
