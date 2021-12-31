const fs = require('fs');
const ffs = fs.createWriteStream("data.txt");

ffs.write("hello world")
