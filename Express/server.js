const express = require("express");
const app = express();
const port = 3000;
const user = require("./user.json");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/fetchData", (req, res) => {
  return res.json(user);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
