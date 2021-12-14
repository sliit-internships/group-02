const db = require("../db");
const bcrypt = require("bcrypt");

const supervisor = function (User) {
  this.full_name = User.full_name;
  this.company = User.company;
  this.mobile_number = User.mobile_number;
  this.email = User.email;
  this.created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  this.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  this.password = User.password;
  this.supervisor_email = User.supervisor_email;
  this.it_number = User.it_number;
  this.approved = User.approved;
};

supervisor.supervisorCheck = async (details) => {
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM supervisor WHERE email = ?`,
      [details.email],
      (err, res) => {
        if (err) {
          console.log("Error finding the user", err);
          reject("Invalid Attempt!!!");
        }
        if (!res.length) {
          console.log("No supervisor found!");
          resolve(0);
        } else {
          console.log("Successful");
          resolve(1);
        }
      }
    );
  });
  return response;
};

module.exports = supervisor;