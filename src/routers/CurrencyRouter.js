const express = require("express")
const { quotation, exchangeFromBRL } = require("../controllers/CurrencyController")

const router = new express.Router()
  .get("/:currency", quotation)
  .get("/:currency/:value", exchangeFromBRL)

module.exports = router