// login button functionality
document.getElementById('loginbtn')
.addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12
    const pinNumber = 1

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumbeValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumbeValue)

    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert("Invalid number/pin")
    }
})