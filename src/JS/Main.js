function populateData(){

}
function setHTML(deposits, withdrawals, bills, transfers, merchants, loans){
    document.getElementById("deposit_num").innerHTML = "$" + deposits
    document.getElementById("with_num").innerHTML = "$" + withdrawals
    document.getElementById("bills_num").innerHTML = "$" + bills
    document.getElementById("transfer_num").innerHTML = "$" + transfers
    document.getElementById("merchant_num").innerHTML = "$" + merchants
    document.getElementById("loan_num").innerHTML = "$" + loans
}

let deposits = 0
let withdrawals = 0
let bills = 0
let transfers = 0
let merchants = 0
let loans = 0

setHTML(deposits, withdrawals, bills, transfers, merchants, loans)