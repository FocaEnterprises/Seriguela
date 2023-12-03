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

const exchangeToCurrency = async (req, res) => {
  const { fromCurrency, toCurrency, value } = req.params

  const fromQuotation = getQuotation(fromCurrency)

  if(!fromQuotation) {
    return res.status(404).json({ error: "From currency is unknown" })
  }

  const toQuotation = getQuotation(toCurrency)

  if(!toQuotation) {
    return res.status(404).json({ error: "To currency is unknown" })
  }

  if(isNaN(value)) {
    return res.status(400).json({ error: "The value must be a number" })
  }

  if(value < 0) {
    return res.status(400).json({ error: "Cannot exchange negative values" })
  }

  const quotationRate = fromQuotation / toQuotation
  const exchangedValue = value * quotationRate
  
  res.status(200).json({
    fromCurrency: fromCurrency.toUpperCase(),
    toCurrency: toCurrency.toUpperCase(),
    fromValue: parseFloat(value).toFixed(2),
    exchangeRate: quotationRate.toFixed(2),
    exchangedValue: exchangedValue.toFixed(2)
  })
}

module.exports = {
  quotation,
  exchangeFromBRL,
  exchangeToCurrency
}