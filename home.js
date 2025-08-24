const validPin = 1234

document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault()
    // console.log("Add money")

    const bank = document.getElementById("bank").value

    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)

    const pin = parseInt(document.getElementById("add-pin").value)

    const availableBalance = parseInt(document.getElementById("availabe-balance").innerText)

    if(accountNumber.length < 10 ){
        alert("Enter a valid Account Number")
        return ;
    }
    if (pin !== validPin){
        alert("Please provide a valid pin")
        return ;
    }

    const totalNewbalance = amount + availableBalance
    document.getElementById("availabe-balance").innerText = totalNewbalance

    // console.log(bank,accountNumber,amount,pin)
})
// Cash out withdraw

document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()
    const amount =  parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt(document.getElementById('availabe-balance').innerText)

    console.log(amount,availableBalance)

    const withdrawBalance = availableBalance - amount
    console.log(withdrawBalance)
    document.getElementById('availabe-balance').innerText  = withdrawBalance
    
})




//toggleing feature

// for add money
document.getElementById("add-money-button").addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = "none"
    document.getElementById('add-money-parent').style.display = "block"
})

// for cash out
document.getElementById("cash-out-button").addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = "none"
    document.getElementById('cash-out-parent').style.display = "block"
})