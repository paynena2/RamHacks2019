var mysql = require('mysql');
    
var con = mysql.createConnection({
  host: "hackathon.crfggblwxxhg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "cupcake123",
  database: "Hackathondb"
});

function populateDeposit(){
    var arr = new array();

    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "hackathon.crfggblwxxhg.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "cupcake123",
      database: "Hackathondb"
    });
    
    con.connect(function(err) {
      
      con.query("SELECT id, date, amount, payee-id, status FROM Depositstb", function (err, result, fields) {
        
        console.log(result);
        arr.push(result);
      });
    });
}

function populateWithdrawal(){
    con.connect(function(err) {
        
        con.query("SELECT id, date, amount, payee-id, status FROM Withdrawaltb", function (err, result, fields) {
         
          console.log(result);
          var arr2 = new array();
          arr2.push(result);
        });
    });
}

function populateBills(){
    con.connect(function(err) {
       
        con.query("SELECT id, creation-date, payment-date, amount, payee-id, status FROM Bills", function (err, result, fields) {
         
          console.log(result);
          var arr3 = new array();
          arr3.push(result);
        });
    });
}

function populateTransfers(){
    con.connect(function(err) {
        
        con.query("SELECT id, date, amount, payee-id, status FROM Transfer", function (err, result, fields) {
          
          console.log(result);
          var arr4 = new array();
          arr4.push(result);
        });
    });
}

function setHTML(deposits, withdrawals, bills, transfers, merchants, loans){
    document.getElementById("deposit_num").innerHTML = "$" + deposits
    document.getElementById("with_num").innerHTML = "$" + withdrawals
    document.getElementById("bills_num").innerHTML = "$" + bills
    document.getElementById("transfer_num").innerHTML = "$" + transfers
}

let deposits = 0
let withdrawals = 0
let bills = 0
let transfers = 0
let merchants = 0
let loans = 0


setHTML(deposits, withdrawals, bills, transfers, merchants, loans)