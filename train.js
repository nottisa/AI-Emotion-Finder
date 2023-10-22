const brain = require('brain.js');
const network = new brain.NeuralNetwork();
var strManipulation = require('./modules/stringManipulation');
const fs = require('fs');
const data = []

try {
  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
  } else {
    let dataFolder = fs.readdirSync('./data');
    for (fileName of dataFolder) {
      let file = require('./data/' + fileName);
      for (element of file) {
        data.push({input:element["word"], output:element["var"]})
      }
    }
  }
} catch (err) {
  console.error(err);
}

network.train(data, {log: detail => console.log(detail)});

let result = network.run(strManipulation.translate("hi"))
console.log(result)