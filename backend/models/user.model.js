const db = require("../db");
const bcrypt = require("bcrypt");

const user = (User) => {
  this.full_name = User.full_name;
  this.it_number = User.it_number;
  this.registration_year = User.registration_year;
  this.second_year_completion_year = User.second_year_completion_year;
  this.second_year_completion_semester = User.second_year_completion_semester;
  this.specialization = User.specialization;
  this.mobile_number = User.mobile_number;
  this.home_number = User.home_number;
  this.email = User.email;
  this.internship_start_date = User.internship_start_date;
  this.created_at = new Date();
  this.updated_at = new Date();
  this.password = User.password;
};

user.login = async (username, password) => {
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM students WHERE username = ('${username}')`,
      (err, res) => {
        if (err) {
          console.log("Error finding the user", err);
          reject(new Error(err.message));
        }
        else if (!res.length) {
          console.log("Username not found");
          resolve("Credentials inserted are incorrect");
        }
        else bcrypt.compare(password, res[0].password, (err, result) => {
          if (err) {
            console.log("Error fetching details", err);
            reject(new Error(err.message));
          }
          else if (result) {
            console.log("Successful");
            resolve(res);
          } else {
            console.log("Password inserted is not matching", err);
            resolve("Credentials inserted are incorrect");
          }
        });
      }
    );
  });
  return response;
};

user.register = async (details) => {
    const response = new Promise((resolve, reject) => {
        db.query

    });
    return response;
};

module.exports = user;
