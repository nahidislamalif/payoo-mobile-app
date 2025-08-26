const validPin = 1234

// function to get the input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = Number(inputFieldValue)
    return inputFieldValueNumber
}

function getInputvalue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// FUNCTION TO GET INNERTEXT

function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = Number(elementValue)
    return elementValueNumber
}

// function to set inner text

function setInnerText(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}

// Function to toggle
function handleToggle(id){
    const forms =  document.getElementsByClassName("form")
    console.log(forms)
    for (const form of forms ){
        form.style.display = "none"
        document.getElementById(id).style.display = "block"
    }
}

// Add Money
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = getInputValueNumber("add-amount")
    const pin = getInputValueNumber("add-pin")
    const availableBalance = getInnerText('available-balance')

    if (accountNumber.length < 10) {
        alert("Enter a valid Account Number")
        return
    }
    if (pin !== validPin) {
        alert("Please provide a valid pin")
        return
    }

    const totalNewBalance = amount + availableBalance
    setInnerText("available-balance", totalNewBalance)
})

// Withdraw Money
document.getElementById("withdraw-btn").addEventListener('click', function (e) {
    e.preventDefault()
    const amount = getInputValueNumber('withdraw-amount')
    const availableBalance = getInnerText('available-balance')

    if (amount > availableBalance) {
        alert("Not enough balance")
        return
    }

    const totalNewAvailableBalance = availableBalance - amount
    setInnerText("available-balance", totalNewAvailableBalance)
})

// Tab switch
document.getElementById("add-money-button").addEventListener('click', function (e) {
  
        handleToggle("add-money-parent")
    })

document.getElementById("cash-out-button").addEventListener('click', function () {
    
        handleToggle("cash-out-parent")
})

document.getElementById("transfer-button").addEventListener('click',function(){
    
    handleToggle("transfer-money-parent")
})
document.getElementById("bonus-button").addEventListener('click',function(){  
    handleToggle("get-bonus-parent")
})

// logout Button
document.getElementById('logout-button').addEventListener('click',function(){
     window.location.href="./index.html"
})