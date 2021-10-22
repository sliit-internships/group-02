const db = require("../db");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  var passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  try {
    if (!email) {
      return res
        .status(400)
        .send({ message: "Email field cannot be empty!!!" });
    }

    if (email.length > 254) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var validEmail = emailRegex.test(email);
    if (!validEmail) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var parts = email.split("@");
    if (parts[0].length > 64) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    var domainParts = parts[1].split(".");
    if (
      domainParts.some(function (part) {
        return part.length > 63;
      })
    ) {
      return res.status(400).send({ message: "Invalid Email!!!" });
    }

    if (!password) {
      return res
        .status(400)
        .send({ message: "Password field cannot be empty!!!" });
    }

    var validPassword = passwordRegex.test(password);
    if (!validPassword) {
      return res.status(400).send({
        message:
          "Password must contain minimum 8 characters, one UPPERCASE letter, one lowercase letter, one number and one special character!!!",
      });
    }

    const results = db
      .promise()
      .query(`SELECT id FROM students WHERE username = ('${email}')`);
    if (results.length) {
      return res.status(400).send({ message: "Email already in use!!!" });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({ message: err.message });
        } else {
          db.query(
            `INSERT INTO students (username, password) VALUES ('${email}', '${hash}')`,
            (error, result) => {
              if (error) {
                return res.status(400).send({ msg: error.message });
              }
              return res.status(201).send({ msg: "Done" });
            }
          );
        }
      });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  db.query(
    `SELECT * FROM students WHERE username = ('${email}')`,
    (error, result) => {
      if (error) {
        return res.status(400).send({ msg: error.message });
      }
      if (!result.length) {
        return res
          .status(400)
          .send({ msg: "Credentials inserted are incorrect" });
      }

      bcrypt.compare(password, result[0]["password"], (err, result) => {
        if (err) {
          return res
            .status(400)
            .send({ msg: "Credentials inserted are incorrect" });
        }
        if (result) {
          return res.status(201).send({ msg: "done" });
        }
        return res
            .status(400)
            .send({ msg: "Credentials inserted are incorrect" });
      });
    }
  );
};

exports.forgotpassword = (req, res, next) => {
  res.send("Forgot password route");
};

exports.resetpassword = (req, res, next) => {
  res.send("Reset password route");
};