const mysql = require("mysql2");
const db = require("../db")

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("CREATE DATABASE internshipDB", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });