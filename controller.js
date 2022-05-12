const path = require("path");
const fs = require("fs");

//joining path of directory
const directoryPath = path.join(__dirname, "/");
console.log(__dirname);
//passsing directoryPath and callback function

module.exports.list = async (req, res, next) => {
  try {
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
      //listing all files using forEach
      var arr = [];

      files.forEach(function (file) {
        //  filtering all csv files in the direcrtory
        if (path.extname(file) === ".csv") {
          arr.push(file);
        }
      });
      res.send(arr.length > 0 ? arr : { message: "No files found" });
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports.write = async (req, res, next) => {
  // write a file with current tiemstamp and with current time as file name
  try {
    const resp = await fs.writeFileSync(
      `${new Date(Date.now() * 1000).toString()}.txt`,
      new Date().toString()
    );
    console.log(resp);
    res.send({ message: "file created successfully" });
  } catch (err) {
    res.send(err);
  }
};
