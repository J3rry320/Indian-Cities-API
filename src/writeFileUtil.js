const fs = require("fs");

const writeFile = () => {
  try {
    fs.writeFileSync(
      require("path").join(__dirname, "../db.json"),
      JSON.stringify({
        ...require("../data/states.json"),
        ...require("../data/cities.json"),
        ...require("../data/windDegree.json"),
        ...require("../data/gradients.json"),
      })
    );
  } catch (error) {
    throw new Error("Cannot write the file", error);
  }
};
module.exports = {
  writeDB: () => fs.existsSync(__dirname, "../db.json") && writeFile(),
};
