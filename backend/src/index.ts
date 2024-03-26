import express from 'express';

const app = express();

// GET - get data from database
// PUT - update or modify (mutate) data
// POST - send data 
// DELETE - remove data

app.use(express.json());


app.delete("/hello", (req, res, next)=> {
  console.log(req.body.name);
  return res.send("Hello");
});



app.listen(3000, ()=>console.log("Server Open"));