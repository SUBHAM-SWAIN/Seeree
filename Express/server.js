const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const user = require("./user.json");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/fetchData", (req, res) => {
  return res.json(user);
});

app.get("/singleUser/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const userData = user.find((user) => user.id == id);
  console.log(userData);
  return res.json(userData);
});

app.post("/createUser", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.name ||
    !body.email ||
    !body.id ||
    !body.age ||
    !body.phone
  ) {
    {
      return res.status(400).json({
        message: "Please provide all the required fields",
      });
    }
  } else {
    user.push(body);
    fs.writeFileSync("./user.json", JSON.stringify(user, null, 2));
    return res.json({
      message: "User created successfully",
    });
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
