const mysql = require("mysql2");
const db = require("../db");

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(100) UNIQUE, password VARCHAR(100), resetpasswordtoken VARCHAR(1000), resetpasswordexpire DATE)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
