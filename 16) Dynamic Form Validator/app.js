//Username

const userName = document.createElement("input")
userName.id = "userName"
userName.type = "text"
userName.placeholder = "Enter user name"
document.getElementById("forms").appendChild(userName)

const userNameInput = document.getElementById("userName")
userNameInput.addEventListener("input", debounce(function (event) {
  const userNameValue = event.target.value
  const regex = /^[A-Z][a-z]{0,14}$/
  validateInput(event.target, regex, "Invalid username. Ensure it starts with a capital letter, contains no numbers, and is not more than 15 letters long.")
}, 500))
/*function checkUserName(event) {
    const userNameValue = event.target.value
    const regex = /^[A-Z][a-z]{0, 14}$/
  if (userNameValue === "") {
    alert("Please enter your name")
  } else if (!regex.test(userNameValue) || userNameValue.length > 15) {
    alert("Invalid username. Ensure it starts with a capital letter, contains no numbers, and is not more than 15 letters long.")
  } else {
    alert("Hello " + userNameValue)
  }
}*/

//Email

const emailAddress = document.createElement("input")
emailAddress.id = "emailAddress"
emailAddress.type = "email"
emailAddress.placeholder = "Enter email address"
document.getElementById("forms").appendChild(emailAddress)

const emailAddressInput = document.getElementById("emailAddress")
emailAddressInput.addEventListener("blur", debounce(function (event) {
  const emailAddressValue = event.target.value
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  validateInput(event.target, regex, "Invalid email address")
}, 500))
/*function checkEmail(event) {
   const emailAddressValue = event.target.value
   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 if (emailAddressValue === "") {
   alert("Please enter a valid email address")
 } else if (!regex.test(emailAddressValue)) {
   alert("Invalid email address")
 } else {
   alert("Thank you")
 }
}*/


//Password

const passWord = document.createElement("input")
passWord.id = "passWord"
passWord.type = "password"
passWord.placeholder = "Enter password"
document.getElementById("forms").appendChild(passWord)

const passWordInput = document.getElementById("passWord")
passWordInput.addEventListener("blur", debounce(function (event) {
  const passWordValue = event.target.value
  const regex = /^(?=.*[!@#$%^&*()-+])[a-zA-Z0-9!@#$%^&*()-+]{8,15}$/
  validateInput(event.target, regex, "Invalid password. Ensure it contains at least 8 characters,is not more than 15 characters long and includes at least one special char.")
}, 500))
/*function checkPassword(event) {
   const passWordValue = event.target.value
   const regex = /^(?=.*[!@#$%^&*()-+])[a-zA-Z0-9!@#$%^&*()-+]{8,15}$/
 if (passWordValue === "") {
   alert("Please enter your password")
 } else if (!regex.test(passWordValue)) {
   alert("Invalid password. Ensure it contains at least 8 characters,is not more than 15 characters long and includes at least one special char.")
 } else {
   alert("Welcome")
 } 
}*/




//Universal functions

function validateInput(inputElement, regex, errorMessage) {
  if (!regex.test(inputElement.value)) {
    document.getElementById("errors").textContent = errorMessage;
    inputElement.style.borderColor = "red";
    return errorMessage
  } else {
    document.getElementById("errors").textContent = "";
    inputElement.style.borderColor = "green";
    return ""
  }
}

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

document.getElementById("check").addEventListener("click", function () {
  let isValid = true

  const userNameRegex = /^[A-Z][a-z]{0,14}$/
  const passwordRegex = /^(?=.*[!@#$%^&*()-+])[a-zA-Z0-9!@#$%^&*()-+]{8,15}$/
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  validateInput(userNameInput, userNameRegex, "Invalid username.")
  validateInput(passWordInput, passwordRegex, "Invalid password.")
  validateInput(emailAddressInput, emailRegex, "Invalid email address.")

})
