
// THIS DISPLAYS ALL OF THE WEBPAGES


const path = require("path");
const router = require("express").Router();

// this is going to be the main page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../../animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../../zookeepers.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

module.exports = router;
