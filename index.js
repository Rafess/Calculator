const number =  document.querySelector("input[id='equals']");
 const form = document.querySelector("form")
 const total = document.querySelector("span");
 const history = document.createElement("ul");
 const historyDiv = document.querySelector("section");
 let firstNumber;      
 function calculate(operator) {
     if (operator === "+") {
        firstNumber = total.innerText
        total.textContent = parseInt(total.innerText) + parseInt(number.value)
         storeOperations(operator);
         form.reset()
     }
     if (operator === "-") {
        firstNumber = total.innerText
         total.textContent = parseInt(total.innerText) - parseInt(number.value)
         storeOperations(operator);
         form.reset()
     }
     if (operator === "*") {
        firstNumber = total.innerText
         total.textContent = parseInt(total.innerText) * parseInt(number.value)
         storeOperations(operator);
         form.reset()
     }
     if (operator === "/") {
        firstNumber = total.innerText
         total.textContent = parseInt(total.innerText) / parseInt(number.value);
         storeOperations(operator);
         form.reset()
     }
 }
 function clearTotal() {
    total.textContent = 0;
}
function showHistory() {
    historyDiv.appendChild(history)
}

function storeOperations(operator) {
    let operations = [];
    operations = [...operations, `${firstNumber} ${operator} ${number.value} = ${total.textContent}`];
    for (const element of operations) {
        history.innerHTML += `<li class="operation-stored"> ${element} </li>`;
    }
}