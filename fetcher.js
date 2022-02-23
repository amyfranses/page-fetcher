const args = process.argv.slice(2);

const fs = require("fs");
const request = require("request");

const url = args[0];
const saveFile = args[1];

request("https://www.example.edu/ ", (error, response, body) => {
  fs.writeFile(url, body, (error) => {
    if (!error) {
      return;
    }
  });
  fs.stat(saveFile, (error, stats) => {
    if (!error) {
      console.log(`Downloaded and saved ${stats.size} bytes to ${saveFile}`);
    }
  });
});
