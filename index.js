const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const port = 3000;

app.use(express.json());

const cars = [
  {
    id: getNewId(),
    brand: "BMW",
    modelname: "320",
    color: "Grey",
  },
  {
    id: getNewId(),
    brand: "Mercedes-benz",
    modelname: "C63",
    color: "White",
  },
];

function getNewId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

app.get("/", (req, res) => {
  res.status(200).json(cars);
});

app.post("/", (req, res) => {
  console.log(req.body);
  let newCar = req.body;

  cars.push(newCar);
  res.status(201).send("Car added!");
});

app.put("/", (req, res) => {
  const updatedCars = cars.map((car) => {
    if (car.id === 1) {
      return { brand: "Audi", modelName: "S5", color: "blue", id: "" };
    }

    return car;
  });
  res.send(updatedCars);
});

app.delete("/", (req, res) => {
  const carToRemove = "";
  const findID = cars.find((car) => carToRemove === cars.id);
  if (findID === carToRemove) {
    cars.splice(findID, 1);
  }

  res.send("Delete request");
});

app.listen(port, () => {
  console.log("App is now running on port: " + port);
});
