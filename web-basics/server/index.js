const express = require("express");
const app = express();

// 8080 is default used for https
const PORT = 5050;

/** 
if nodejs server ke pass koi static file
(any kind of file) request aati h, then it searches it in
 public folder
*/
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("RUNNING ON PORT 5050!");
});
