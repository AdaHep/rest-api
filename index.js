const express = require("express");
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

app.use("/", (req, res, next) => {
  console.log("api visited");
  next();
});

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.post("/api/cars", (req, res) => {
  console.log(req.body);
  cars.push(req.body);
  res.status(201).send("Car added!");
});

app.listen(port, () => {
  console.log("App is now running on port: " + port);
});
