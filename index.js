var fs = require('fs')

var writeFile = fs.writeFileSync("actors.txt", "Ranbir sandeep manduka")

console.log("writeFile",writeFile)