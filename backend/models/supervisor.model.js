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
  this.role = User.role;
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

supervisor.directregister = async (em, pw, role) => {
    console.log(em, pw, role);
    const response = new Promise((resolve, reject) => {
      db.query(`SELECT id FROM users WHERE email = ?`, [em.email], (err, res) => {
        if (err) {
          console.log("Error with DB1", err);
          reject(new Error(err.message));
        } else if (res.length) {
          console.log("User already exists");
          reject("User Exists");
        } else {
          bcrypt.hash(pw.password, 10, (err, hash) => {
            if (err) {
              console.log("Error with hashing");
              reject(new Error(err.message));
            } else {
              db.query(
                `INSERT INTO users ( email, created_at, updated_at, password, role) VALUES ('${em.email}', '${role.created_at}', '${role.updated_at}', '${hash}', '${role.role}')`,
                (error, result) => {
                  if (error) {
                    console.log("Error with DB2", err);
                    reject(new Error(error.message));
                  }
                  if (result) {
                    db.query(
                      `INSERT INTO supervisor ( email, created_at, updated_at, password) VALUES ('${em.email}', '${role.created_at}', '${role.updated_at}', '${hash}')`,
                      (error, result1) => {
                        if (result1) {
                          console.log("Added User");
                          resolve("User Added");
                        } else {
                          console.log("User was not added");
                          reject("User was not added", result1);
                        }
                      }
                    );
                  } else {
                    console.log("User was not added");
                    reject("User was not added", result);
                  }
                }
              );
            }
          });
        }
      });
    });
    return response;
  };

module.exports = supervisor;