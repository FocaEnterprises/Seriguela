const express = require("express")
const { quotation, exchangeFromBRL, exchangeToCurrency } = require("../controllers/CurrencyController")

const router = new express.Router()
  .get("/:currency", quotation)
  .get("/:currency/:value", exchangeFromBRL)
  .get("/:fromCurrency/:toCurrency/:value", exchangeToCurrency)

module.exports = router
