var fs = require("fs");
fs.mkdirSync('/Users/Anton/Documents/GitHub/R0314-MEAN/WS2/NewData');
console.log(fs.readdirSync('/Users/Anton/Documents/GitHub/R0314-MEAN/WS2'));
fs.writeFileSync('NewData/testi.txt', "Toimiiko?");