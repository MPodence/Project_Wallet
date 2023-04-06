const getCurrenciesAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const responseJSON = await response.json();
  delete responseJSON.USDT;
  return responseJSON;
};

export default getCurrenciesAPI;
