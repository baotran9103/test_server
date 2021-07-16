var express = require("express");
var app = express();

var cors = require("cors");

// ==============Middleware ================

var bodyParser = require("body-parser");

var router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 10456;
app.listen(port);
console.log("Oder API is running at " + port);
//  ========= end middleware ==================

app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  console.log("new request made on : ", req.path);
  next();
});
app.use("/", router);
router.route("/hello").get((req, res) => {
  res.send("Welcome to server");
});

app.use((req, res) => {
  res.write("404! not found");
  res.end();
});
