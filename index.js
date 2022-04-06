const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const port = 3000;

app.use(express.json());

const cars = [
  {
    id: 0,
    brand: "BMW",
    modelname: "320",
    color: "Grey",
  },
  {
    id: 1,
    brand: "Mercedes-benz",
    modelname: "C63",
    color: "White",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(cars);
});

app.post("/", (req, res) => {
  console.log(req.body);
  cars.push(req.body);
  res.status(201).send("Car added!");
});

app.put("/", (req, res) => {
  res.send("Put Request");
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const deleted = cars.find(id);

  cars.find();

  res.send("delete request");
});

app.listen(port, () => {
  console.log("App is now running on port: " + port);
});
