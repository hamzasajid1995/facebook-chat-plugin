const express = require("express");
const bodyParser = require("body-parser");

const { postWebhook, gettWebhook } = require("./facebookController");

const app = express();
const port = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!....");
});

// Creates the endpoint for our webhook
app.post("/webhook", postWebhook);

// Adds support for GET requests to our webhook
app.get("/webhook", gettWebhook);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
