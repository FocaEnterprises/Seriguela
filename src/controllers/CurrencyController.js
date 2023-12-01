const { getQuotation } = require("../services/CurrencyService")

const quotation = async (req, res) => {
  const quotationValue = getQuotation(req.params.currency)

  if(!quotationValue) {
    return res.status(404).json({ error: "Unknown currency" })
  }

  res.status(200).json({ exchangeRate: quotationValue.toFixed(2) })
}

const exchangeFromBRL = async (req, res) => {
  const { currency, value } = req.params
  const quotationValue = getQuotation(currency)

  if(!quotationValue) {
    return res.status(404).json({ error: "Unknown currency" })
  }

  if(isNaN(value)) {
    return res.status(400).json({ error: "The value must be a number" })
  }

  if(value < 0) {
    return res.status(400).json({ error: "Cannot exchange negative values" })
  }

  const exchange = quotationValue * value

  res.status(200).json({
    fromCurrency: "BRL",
    toCurrency: currency,
    fromValue: parseFloat(value).toFixed(2),
    exchangeRate: quotationValue.toFixed(2),
    exchangedValue: exchange.toFixed(2)
  })
}

module.exports = {
  quotation,
  exchangeFromBRL
}