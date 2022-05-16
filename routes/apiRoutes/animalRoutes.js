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
