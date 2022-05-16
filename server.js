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