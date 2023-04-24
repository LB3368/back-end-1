const express = require("express")

const cors = require("cors")

const app = express()

// Create the middleware - app.use calls are middleware
app.use(express.json())

app.use(cors())


// Put the endpoint and method to handle sending above the app.listen but below the middleware
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
  })

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
  })

  //destruction the above code like this:
  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase)
  })

app.listen(4000, () => console.log("Server running on port 4000"))

