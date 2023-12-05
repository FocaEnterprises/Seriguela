require("dotenv").config()

const { update } = require("./services/CurrencyService")
const server = require("./server")

const start = async () => {
  await update()
  setInterval(update, 60000)
  server.listen(3000, () => console.log("Online!"))
}

start()
