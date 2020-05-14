const states = require("../data/states.json");
const cities = require("../data/cities.json");
const fs = require("fs");
const path = require("path");
const writeFile = () => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "../db.json"),
      JSON.stringify({ ...states, ...cities })
    );
  } catch (error) {
    throw new Error("Cannot write the file", error);
  }
};
module.exports = {
  writeDB: () => fs.existsSync(__dirname, "../db.json") && writeFile(),
};
