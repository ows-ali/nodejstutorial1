var fs = require("fs");
//whenever asynchrouns operation is found/met, it is removed from call stack,nd execturion proceeds
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
// if there are more async operatiosn, then they will run as they gets completed
// fs.readFile('input2.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// fs.readFile('input3.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

console.log("Program Ended");