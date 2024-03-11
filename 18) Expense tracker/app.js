
let expenseArr = []

const expenseComment = document.createElement("input")
expenseComment.type = "text"
expenseComment.id = "userText"
expenseComment.placeholder = "Enter the expense name"
document.getElementById("user-input").appendChild(expenseComment)

const expenseSum = document.createElement("input")
expenseSum.type = "number"
expenseSum.id = "userMoney"
expenseSum.placeholder = "Enter the expense sum"
document.getElementById("user-input").appendChild(expenseSum)

const expenseButton = document.getElementById("calculate")
expenseButton.addEventListener("click", function () {
    const expenseName = document.getElementById("userText").value
    const expenseAmount = parseFloat(document.getElementById("userMoney").value)
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        const expenseObj = {
            name: expenseName,
            amount: expenseAmount
        }
        expenseArr.push(expenseObj)
        document.getElementById("userText").value = ""
        document.getElementById("userMoney").value = ""
        updateDisplay()

    }

})

function updateDisplay() {
    const expenseInfoDiv = document.getElementById("expense-info")
    const calculationsDiv = document.getElementById("calculations")

    expenseInfoDiv.innerHTML = ''
    let totalAmount = 0

    expenseArr.forEach(expense => {
        const expenseElement = document.createElement("div")
        expenseElement.textContent = `${expense.name}: $${expense.amount}`
        expenseInfoDiv.appendChild(expenseElement)

        totalAmount += expense.amount
    })
    calculationsDiv.textContent = `Total: $${totalAmount.toFixed(2)}`

}

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function () {
    expenseArr = []
    document.getElementById("userText").value = ""
    document.getElementById("userMoney").value = ""
    document.getElementById("expense-info").innerHTML = ""
    document.getElementById("calculations").textContent = ""
})