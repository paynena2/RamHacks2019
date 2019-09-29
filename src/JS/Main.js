function populateDeposits(){
    con.connect(function(err) {
        //if (err) throw err;
        con.query("SELECT * FROM Depositstb", function (err, result, fields) {
          //if (err) throw err;
          console.log(result);
        });
      });
}

function populateWithdrawals(){
    con.connect(function(err) {
        //if (err) throw err;
        con.query("SELECT * FROM Withdrawalstb", function (err, result, fields) {
          //if (err) throw err;
          console.log(result);
        });
      });
}

function populateBills(){
    con.connect(function(err) {
        //if (err) throw err;
        con.query("SELECT * FROM Bills", function (err, result, fields) {
          //if (err) throw err;
          console.log(result);
        });
      });
}

function populateTransactions(){
    con.connect(function(err) {
        //if (err) throw err;
        con.query("SELECT * FROM Transactions", function (err, result, fields) {
          //if (err) throw err;
          console.log(result);
        });
      });
}




function setHTML(deposits, withdrawals, bills, transfers){
    document.getElementById("deposit_num").innerHTML = "$" + deposits
    document.getElementById("with_num").innerHTML = "$" + withdrawals
    document.getElementById("bills_num").innerHTML = "$" + bills
    document.getElementById("transfer_num").innerHTML = "$" + transfers
}

let deposits = 57000
let withdrawals = 4300
let bills = 2798
let transfers = 5300
setHTML(deposits, withdrawals, bills, transfers)

let mysql = require('mysql')

var con = mysql.createConnection({
  host: "hackathon.crfggblwxxhg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "cupcake123",
  database: "Hackathondb"
})

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  console.log('Connected to the MySQL server.');
});

populateDeposits();
