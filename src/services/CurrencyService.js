const { default: axios } = require("axios");

const apiKey = process.env.API_KEY
const api = axios.create({ baseURL: process.env.API_URL })

let quotations = { }

const update = async () => {
  const response = await api.get(`/finance/quotations?format=json&key=${apiKey}`)
  quotations = response.data.results.currencies
}

const getQuotation = currency => {
  return quotations[currency.toUpperCase()]?.buy ?? null
}

setInterval(update, 10000);
update()

module.exports = {
  getQuotation 
}