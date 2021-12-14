const db = require("../db");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const supervisorModel = require("../models/supervisor.model");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

// exports.register = async (req, res, next) => {
//   const { email, password } = req.body;

//   var emailRegex =
//     /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//   var passwordRegex =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

//   try {
//     if (!email) {
//       return res
//         .status(400)
//         .send({ message: "Email field cannot be empty!!!" });
//     }

//     if (email.length > 254) {
//       return res.status(400).send({ message: "Invalid Email!!!" });
//     }

//     var validEmail = emailRegex.test(email);
//     if (!validEmail) {
//       return res.status(400).send({ message: "Invalid Email!!!" });
//     }

//     var parts = email.split("@");
//     if (parts[0].length > 64) {
//       return res.status(400).send({ message: "Invalid Email!!!" });
//     }

//     var domainParts = parts[1].split(".");
//     if (
//       domainParts.some(function (part) {
//         return part.length > 63;
//       })
//     ) {
//       return res.status(400).send({ message: "Invalid Email!!!" });
//     }

//     if (!password) {
//       return res
//         .status(400)
//         .send({ message: "Password field cannot be empty!!!" });
//     }

//     var validPassword = passwordRegex.test(password);
//     if (!validPassword) {
//       return res.status(400).send({
//         message:
//           "Password must contain minimum 8 characters, one UPPERCASE letter, one lowercase letter, one number and one special character!!!",
//       });
//     }

//     const results = db
//       .promise()
//       .query(`SELECT id FROM students WHERE username = ('${email}')`);
//     if (results.length) {
//       return res.status(400).send({ message: "Email already in use!!!" });
//     } else {
//       bcrypt.hash(password, 10, (err, hash) => {
//         if (err) {
//           return res.status(500).send({ message: err.message });
//         } else {
//           db.query(
//             `INSERT INTO students (username, password) VALUES ('${email}', '${hash}')`,
//             (error, result) => {
//               if (error) {
//                 return res.status(400).send({ msg: error.message });
//               }
//               return res.status(201).send({ msg: "Done" });
//             }
//           );
//         }
//       });
//     }
//   } catch (error) {
//     return res.status(500).send({ msg: error.message });
//   }
// };

exports.directregister = async (req, res, next) => {
  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  var passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "Fields cannot be empty!!!" });
    }

    if (req.body.email.length > 254) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var validEmail = emailRegex.test(req.body.email);
    if (!validEmail) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    const x = req.params;
    console.log(!x)
    if (!x) {
      var validPassword = passwordRegex.test(req.body.password);
      if (!validPassword) {
        return res.status(400).send({
          message:
            "Password must contain minimum 8 characters, one UPPERCASE letter, one lowercase letter, one number and one special character!!!",
        });
      }

      // const emailHold = req.body.email;
      // localStorage.setItem('emailHold', emailHold);
      // console.log(emailHold);

      const email = { email: req.body.email };
      const ob1 = new supervisorModel(email);

      const pw = { password: req.body.password };
      const ob2 = new supervisorModel(pw);

      const role = { role: "supervisor" };
      const ob3 = new supervisorModel(role);

      const result = supervisorModel.directregister(ob1, ob2, ob3);

      result
        .then((user) => {
          res
            .status(200)
            .json({ success: true, data: "Successfully Registered!" });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send({ err });
        });
    } else {
      var parts = req.body.email.split("@");
      if (parts[0].length > 64 || parts[1] != "my.sliit.lk") {
        return res.status(400).send({ message: "Invalid Email!!!" });
      }

      var validPassword = passwordRegex.test(req.body.password);
      if (!validPassword) {
        return res.status(400).send({
          message:
            "Password must contain minimum 8 characters, one UPPERCASE letter, one lowercase letter, one number and one special character!!!",
        });
      }

      // const emailHold = req.body.email;
      // localStorage.setItem('emailHold', emailHold);
      // console.log(emailHold);

      const email = { email: req.body.email };
      const ob1 = new userModel(email);

      const pw = { password: req.body.password };
      const ob2 = new userModel(pw);

      const role = { role: "intern" };
      const ob3 = new userModel(role);

      const result = userModel.directregister(ob1, ob2, ob3);

      result
        .then((user) => {
          res
            .status(200)
            .json({ success: true, data: "Successfully Registered!" });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send({ err });
        });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.register = async (req, res, next) => {
  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  //const email = localStorage.getItem('emailHold');

  try {
    if (
      !req.body.email ||
      !req.body.full_name ||
      !req.body.it_number ||
      !req.body.registration_year ||
      !req.body.second_year_completion_year ||
      !req.body.second_year_completion_semester ||
      !req.body.specialization ||
      !req.body.mobile_number ||
      !req.body.home_number ||
      !req.body.internship_start_date
    ) {
      return res.status(400).send({ message: "Fields cannot be empty!!!" });
    }

    if (req.body.email.length > 254) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var validEmail = emailRegex.test(req.body.email);
    if (!validEmail) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var parts = req.body.email.split("@");
    if (parts[0].length > 64 || parts[1] != "my.sliit.lk") {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    // var domainParts = parts[1].split(".");
    // if (
    //   domainParts.some(function (part) {
    //     return part.length > 63;
    //   })
    // ) {
    //   return res.status(400).send({ message: "Invalid Email!!!" });
    // }

    const userData = new userModel(req.body);

    const result = userModel.register(userData);

    result
      .then((user) => {
        // const accessToken = createAccessToken({ id: user });
        // const refreshtoken = createRefreshToken({ id: user });

        // res.cookie("refreshtoken", refreshtoken, {
        //   httpOnly: true,
        //   path: "/api/refresh_token",
        //   maxAge: 7 * 24 * 60 * 60 * 1000,
        // });
        // res.send({ accessToken });
        res
          .status(200)
          .json({ success: true, data: "Successfully Registered!" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ err });
      });

    if (!req.body.supervisor_email) {
      next();
    } else {
      const emailSup = req.body.supervisor_email;
      const supervisorEmail = { email: req.body.supervisor_email };
      const supervisorAvailable = new supervisorModel(supervisorEmail);
      const result = supervisorModel.supervisorCheck(supervisorAvailable);

      result
        .then((output) => {
          if (output === 1) {
            const reset = `http://localhost:3000/student/login/`; //supervisor login page

            const message = `
              <h1>Supervisor Login</h1>
              <p>New Intern Registered under your supervision. Please login to confirm.</p>
              <a href=${reset} clicktracking=off>${reset}</a>
            `;

            try {
              sendEmail({
                to: req.body.supervisor_email,
                subject: "Supervisor Login",
                text: message,
              });

              res.status(200).json({ success: true, data: "Email Sent" });
            } catch (err) {
              console.log(err);

              return next(new ErrorResponse("Email could not be sent", 500));
            }
          } else {
            const reset = `http://localhost:3000/student/register/${emailSup}`; //supervisor register page

            const message = `
              <h1>Supervisor Register</h1>
              <p>New Intern Registered under your supervision. Please register to confirm.</p>
              <a href=${reset} clicktracking=off>${reset}</a>
            `;

            try {
              sendEmail({
                to: req.body.supervisor_email,
                subject: "Supervisor Register",
                text: message,
              });

              res.status(200).json({ success: true, data: "Email Sent" });
            } catch (err) {
              console.log(err);

              return next(new ErrorResponse("Email could not be sent", 500));
            }
          }
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send({ err });
        });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   db.query(
//     `SELECT * FROM students WHERE username = ('${email}')`,
//     (error, result) => {
//       if (error) {
//         return res.status(400).send({ msg: error.message });
//       }
//       if (!result.length) {
//         return res
//           .status(400)
//           .send({ msg: "Credentials inserted are incorrect" });
//       }

//       bcrypt.compare(password, result[0]["password"], (err, result) => {
//         if (err) {
//           return res
//             .status(400)
//             .send({ msg: "Credentials inserted are incorrect" });
//         }
//         if (result) {
//           return res.status(201).send({ msg: "done" });
//         }
//         return res
//             .status(400)
//             .send({ msg: "Credentials inserted are incorrect" });
//       });
//     }
//   );
// };

exports.login = async (req, res) => {
  //const { email, password } = req.body;

  try {
    if (!req.body.email || !req.body.password) {
      return res.status(500).send({ message: "Fields cannot be empty" });
    }

    const userData = new userModel(req.body);
    const result = userModel.login(userData);
    console.log(result);

    result
      .then((users) => {
        const accessToken = createAccessToken({ id: users });
        const refreshtoken = createRefreshToken({ id: users });
        console.log(refreshtoken);

        res.cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
          path: "/api/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.send({ accessToken });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ err });
      });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", {
      path: "/api/refresh_token",
    });
    return res.json({ msg: "Logged out!!!" });
  } catch (error) {
    return res.status(500).send({ err: error.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const userData = new userModel(req.user);
    const result = userModel.profile(userData);
    console.log(result);

    result
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ err });
      });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.refreshToken = (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token) {
      return res.status(400).json({ message: "Please login or register!!!" });
    }

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Please login or register!!!" });
      }

      const accessToken = createAccessToken({ id: user });

      res.json({ user, accessToken });
    });

    //res.json({refresh_Token});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

exports.forgotpassword = async (req, res, next) => {
  try {
    const email = new userModel(req.body);
    const result = userModel.forgotpassword(email);

    result
      .then((email) => {
        const reset = `http://localhost:3000/passwordReset/${email}`;

        const message = `
        <h1>requested reset</h1>
        <a href=${reset} clicktracking=off>${reset}</a>
        `;

        try {
          sendEmail({
            to: email,
            subject: "Password Reset Request",
            text: message,
          });

          res.status(200).json({ success: true, data: "Email Sent" });
        } catch (err) {
          console.log(err);

          return next(new ErrorResponse("Email could not be sent", 500));
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ err });
      });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.resetpassword = (req, res, next) => {
  try {
    var passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const email = req.params;

    const emails = new userModel(email);
    const result = userModel.resetpasswordEmailCheck(emails);

    result
      .then((email) => {
        if (!req.body.password) {
          return res.status(400).send({ message: "Field cannot be empty!!!" });
        }
        var validPassword = passwordRegex.test(req.body.password);
        if (!validPassword) {
          return res.status(400).send({
            message:
              "Password must contain minimum 8 characters, one UPPERCASE letter, one lowercase letter, one number and one special character!!!",
          });
        }

        console.log(req.params, req.body);
        const password = new userModel(req.body);
        const email2 = new userModel(req.params);
        const resultUpdate = userModel.resetpassword(password, email2);

        resultUpdate
          .then((output) => {
            res.status(200).json({ success: true, data: output });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).send({ err });
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ err });
      });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

async function randomToken() {}
