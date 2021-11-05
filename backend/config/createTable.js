const db = require("../db");

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS users (id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(250) NOT NULL, it_number VARCHAR(250) NOT NULL UNIQUE, registration_year VARCHAR(250) NOT NULL, second_year_completion_year VARCHAR(250) NOT NULL, second_year_completion_semester VARCHAR(250) NOT NULL, specialization VARCHAR(250) NOT NULL, mobile_number VARCHAR(50) NOT NULL, home_number VARCHAR(50) NOT NULL, email VARCHAR(250) NOT NULL UNIQUE, internship_start_date VARCHAR(50) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME default CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP, password VARCHAR(250) NOT NULL)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
