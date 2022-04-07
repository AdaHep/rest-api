const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const fs = require("fs");

const carFile = "./cars.json";
const cars = require(carFile);

function getNewId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

app.get("/", (req, res) => {
  if (!cars) return res.status(404).send("No data found");
  res.status(200).json(cars);
});

app.post("/", (req, res) => {
  let newCarList = cars;
  console.log(req.body);
  let newCar = req.body;
  newCar.id = getNewId();
  newCarList.push(newCar);

  fs.writeFile(
    carFile,
    JSON.stringify(newCarList, null, 2),
    function handleError(err) {
      if (err) console.log(err);
      console.log("Changing file");
    }
  );
  res.status(201).send("Car added!");
});

app.put("/:carID", (req, res) => {
  let id = req.params.carID;
  let foundCar = cars.find((car) => car.id === id);

  if (!foundCar) res.status(404).send("Car not found");

  let updatedCars = cars.map((car) => {
    if (car.id === id) {
      // Edit the information in the car object before sending PUT-request.
      // ID can be changed but is not recomended.
      car = { id: car.id, brand: "XXXX", modelName: "XXXX", color: "XXXX" };
      return car;
    }
    return car;
  });

  fs.writeFile(
    carFile,
    JSON.stringify(updatedCars, null, 2),
    function handleError(err) {
      if (err) console.log(err);
      console.log("Uppdaterar filen");
    }
  );
  res.status(202).send(updatedCars);
});

app.delete("/:carID", (req, res) => {
  let id = req.params.carID;
  let foundCar = cars.find((car) => car.id === id);

  if (!foundCar) res.status(404).send("Car not found");

  let updatedCars = cars.filter((car) => car.id !== id);
  fs.writeFile(
    carFile,
    JSON.stringify(updatedCars, null, 2),
    function handleError(err) {
      if (err) console.log(err);
      console.log("Uppdaterar filen och tar bort valt objekt");
    }
  );
  res.status(201).send("Delete request complete");
});

app.listen(port, () => {
  console.log("App is now running on port: " + port);
});
