//const mysql = require("mysql2");
const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
  insecureAuth: 'true'

});

pool.getConnection((err) => {
  if(err) throw err;
  console.log("Connected to DB");
});

module.exports = pool;

// const mysqlConnection  = mysql.createConnection({
//   host: process.env.DBHOST,
//   user: process.env.DBUSER,
//   password: process.env.DBPASSWORD,
//   database: process.env.DBDATABASE,
// });

// module.exports = {
//   getConnection() {
//     return new Promise((resolve, reject) => {
//       pool
//         .getConnection()
//         .then((connection) => {
//           resolve(connection);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },
// };

// module.exports = { 
//     getConnection() {
//         mysqlConnection.connect(function(err) {
//             if(err) {
//                 console.error('Error connecting: ' + err.message);
//                 return;
//             }

//             console.log('Connected as id: ' + mysqlConnection.threadId)
//         })
//     }
// }

// module.exports = { 
//     getConnection() {
//         mysqlConnection.connect(err => {
//             if(err) {
//                 console.error('Error connecting: ' + err.message);
//                 return;
//             }

//             console.log('Connected as id: ' + mysqlConnection.threadId)
//         })
//     }
// }

// module.exports = mysqlConnection;