const express = require("express")
const cors = require("cors")
const router = require("./routers/CurrencyRouter")

const server = express()
  .use(cors())
  .use("/exchange", router)

module.exports = server