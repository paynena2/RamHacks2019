var mysql = require('node_modules/mysql');

var con = mysql.createConnection({
  host: "hackathon.crfggblwxxhg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "cupcake123",
  database: "Hackathondb"
});

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});

