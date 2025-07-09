const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/add", (req, res) => {
  let { a, b } = req.body;
  return res.json({
    result: parseInt(a) + parseInt(b),
  });
});

app.post("/subtract", (req, res) => {
  let { a, b } = req.body;
  return res.json({
    result: parseInt(a) - parseInt(b),
  });
});

app.post("/multiply", (req, res) => {
  let { a, b } = req.body;
  return res.json({
    result: parseInt(a) * parseInt(b),
  });
});

app.post("/divide", (req, res) => {
  let { a, b } = req.body;

  return res.json({
    result: parseInt(a) / parseInt(b),
  });
});


 app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    return res.json({
      "message":"We will do it latter",
      "id":id
    })
  })

   app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    return res.json({
      "message":"We will do it latter",
      "id":id
    })
  })


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
