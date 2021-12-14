const db = require("../db");
const bcrypt = require("bcrypt");

const user = function (User) {
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
  this.created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  this.updated_at = new Date().toISOString().slice(0, 19).replace("T", " ");
  this.password = User.password;
  this.supervisor_email = User.supervisor_email;
};

user.login = async (details) => {
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users WHERE email = ?`,
      [details.email],
      (err, res) => {
        if (err || !res.length) {
          console.log("Error finding the user", err);
          //reject(new Error(err.message));
          reject("Credentials inserted are incorrect");
          //} else if (!res.length) {
          //console.log("Username not found");
          //reject("Credentials inserted are incorrect");
        } else {
          bcrypt.compare(details.password, res[0].password, (err, result) => {
            if (err) {
              console.log("Error fetching details", err);
              reject(new Error(err.message));
            }
            if (result) {
              console.log("Successful");
              resolve(res[0].it_number);
            } else {
              console.log("Password inserted is not matching");
              reject("Credentials inserted are incorrect");
              //response.json({success: false, message:"passwords "});
              //return result.status(500).json({ msg: "error.message" });
              //reject("error");
            }
          });
        }
      }
    );
  });
  return response;
};

user.register = async (details) => {
  console.log(details);
  const response = new Promise((resolve, reject) => {
    db.query(
      `SELECT id FROM users WHERE email = ?`,
      [details.email],
      (err, res) => {
        if (err) {
          console.log("Error with DB1", err);
          reject(new Error(err.message));
        } else if (res.length) {
          console.log("User already exists");
          reject("User Exists");
        } else {
          bcrypt.hash(details.password, 10, (err, hash) => {
            if (err) {
              console.log("Error with hashing");
              reject(new Error(err.message));
            } else {
              db.query(
                `INSERT INTO users (full_name, it_number, registration_year, second_year_completion_year, second_year_completion_semester, specialization, mobile_number, home_number, email, internship_start_date, created_at, updated_at, password, supervisor_email) VALUES ('${details.full_name}', '${details.it_number}', '${details.registration_year}', '${details.second_year_completion_year}', '${details.second_year_completion_semester}', '${details.specialization}', '${details.mobile_number}', '${details.home_number}', '${details.email}', '${details.internship_start_date}', '${details.created_at}', '${details.updated_at}', '${hash}', '${details.supervisor_email}')`,
                (error, result) => {
                  if (error) {
                    console.log("Error with DB2", err);
                    reject(new Error(error.message));
                  }
                  if (result) {
                    console.log("Added User");
                    resolve("User Added");
                  } else {
                    console.log("User was not added");
                    reject("User was not added", result);
                  }
                }
              );
            }
          });
        }
      }
    );
  });
  return response;
};

user.profile = async (details) => {
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT full_name, it_number, registration_year, second_year_completion_year, second_year_completion_semester, specialization, mobile_number, home_number, email, internship_start_date FROM users WHERE it_number = ?`,
      [details.it_number],
      (err, res) => {
        if (err || !res.length) {
          console.log("Error finding the user", err);
          reject("Error loading the profile");
        } else {
          console.log("Successful");
          resolve(res);
        }
      }
    );
  });
  return response;
};

user.forgotpassword = async (details) => {
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users WHERE email = ?`,
      [details.email],
      (err, res) => {
        if (err || !res.length) {
          console.log("Error finding the user", err);
          reject(
            "Credentials inserted are incorrect or email does not exist in the system!!!"
          );
        } else {
          console.log("Successful");
          resolve(res[0].email);
        }
      }
    );
  });
  return response;
};

user.resetpasswordEmailCheck = async (details) => {
  console.log(details);
  const response = await new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users WHERE email = ?`,
      [details.email],
      (err, res) => {
        if (err || !res.length) {
          console.log("Error finding the user", err);
          console.log(details);
          reject("Invalid Attempt!!!");
        } else {
          console.log("Successful");
          resolve(res[0].email);
        }
      }
    );
  });
  return response;
};

user.resetpassword = async (pw, em) => {
  const response = new Promise((resolve, reject) => {
    bcrypt.hash(pw.password, 10, (err, hash) => {
      if (err) {
        console.log("Error with hashing");
        reject(new Error(err.message));
      } else {
        db.query(
          `UPDATE users SET password='${hash}' WHERE email='${em.email}'`,
          (error, result) => {
            if (error) {
              console.log("Error with DB2", err);
              reject(new Error(error.message));
            }
            if (result) {
              console.log("Password Updated");
              resolve("Password Updated Successfully");
            } else {
              console.log("Password Updated Failed");
              reject("Unsuccessful", result);
            }
          }
        );
      }
    });
  });
  return response;
};

// user.register = async (details) => {
//     console.log(details);
//   const response = new Promise((resolve, reject) => {
//     db.query(
//       `SELECT id FROM students WHERE username = ?`,
//       [details.email],
//       (err, res) => {
//         if (err) {
//           console.log("Error with DB1", err);
//           reject(new Error(err.message));
//         } else if (res.length) {
//           console.log("User already exists");
//           resolve("User Exists");
//         } else {
//           bcrypt.hash(details.password, 10, (err, hash) => {
//             if (err) {
//               console.log("Error with hashing");
//               reject(new Error(err.message));
//             } else {
//               db.query(
//                 `INSERT INTO students (username, password) VALUES ('${details.email}', '${hash}')`,
//                 (error, result) => {
//                   if (error) {
//                     console.log("Error with DB2", err);
//                     reject(new Error(error.message));
//                   } else if (result) {
//                     console.log("Added User");
//                     resolve("User Added", result);
//                   } else {
//                     console.log("User was not added");
//                     resolve("User was not added", result);
//                   }
//                 }
//               );
//             }
//           });
//         }
//       }
//     );
//   });
//   return response;
// };

module.exports = user;
