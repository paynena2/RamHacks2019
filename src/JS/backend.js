var mysql = require('mysql');

var con = mysql.createConnection({
  host: "hackathon.crfggblwxxhg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "cupcake123",
  database: "Hackathondb"
});

con.connect(function(err) {
  //if (err) throw err;
  con.query("SELECT id, date, amount, peyee-idr, status FROM Depositstb", function (err, result, fields) {
    //if (err) throw err;
    console.log(result);
  });
});

