const express = require("express");
const app = express();
const crawler = require("crawler-request");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/convert", async (req, res) => {
  // console.log(req.body);
  const path = req.body.path;
  // console.log(path);

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

app.listen(PORT || 8000, () => console.log("Server Started at ", PORT || 8000));
