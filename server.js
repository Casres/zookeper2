





const fs = require("fs");
const path = require("path");
const { animals } = require("./data/animals.json");

// starts the server
const express = require("express");
const res = require("express/lib/response");
const { application } = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// these automatically (and firstly) read the files named 'index' 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Every time we create a server that will serve a 
// front end as well as JSON data, 
// we'll always want to use this middleware.
app.use(express.static('./'));

// this parses incoming string or array data
app.use(express.urlencoded({ extended: true }));
// this parses incoming data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!!`);
});