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

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const userIndex = user.findIndex((user) => user.id == id);

  user[userIndex] = { ...user[userIndex], ...body };
  fs.writeFileSync("./user.json", JSON.stringify(user, null, 2));
  return res.json({
    message: "User updated successfully",
  });
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  const Index = user.findIndex((user) => user.id == id);

  user.splice(Index, 1);
  fs.writeFileSync("user.json", JSON.stringify(user, null, 2));
  return res.json({ message: "User deleted successfully" });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
