const fs = require("fs");
const path = require("path");
const { animals } = require("./data/animals.json");

// starts the server
const express = require("express");
const res = require("express/lib/response");
const { application } = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Every time we create a server that will serve a 
// front end as well as JSON data, 
// we'll always want to use this middleware.
app.use(express.static('./'));

// this parses incoming string or array data
app.use(express.urlencoded({ extended: true }));
// this parses incoming data
app.use(express.json());

app.get("/api/animals/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404, "error");
  }
});

app.get("/api/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// here we are adding to the server
app.post("/api/animals", (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body, "Hi mom!");
  // this sets the id value to what ever the next index on the array
  req.body.id = animals.length.toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted");
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

// this is going to be the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './animals.html'));
});

app.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './zookeepers.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!!`);
});