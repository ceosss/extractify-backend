const express = require("express");
const app = express();
const crawler = require("crawler-request");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/convert", async (req, res) => {
  const { path } = req.body;

  if (!path) res.json("Invalid Url");

  crawler(path)
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

app.listen(PORT || 3000, () => console.log("Server Started at ", PORT || 3000));
