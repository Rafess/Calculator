 // const button = document.querySelector("#enter");
 let number =  document.querySelector("input[id='equals']");
 let form = document.querySelector("form")
 let total = document.querySelector("span");
 let
 // button.addEventListener('click', function (number){
 //    total.texContent = parseInt(total.innerText) + parseInt(number.value)
 //     form.reset()})
 function calculate(operator) {
     if (operator === "+") {
         total.textContent = parseInt(total.innerText) + parseInt(number.value)
         form.reset()
     }
     if (operator === "-") {
         total.textContent = parseInt(total.innerText) - parseInt(number.value)
         form.reset()
     }
     if (operator === "*") {
         total.textContent = parseInt(total.innerText) * parseInt(number.value)
         form.reset()
     }
     if (operator === "/") {
         total.textContent = parseInt(total.innerText) / parseInt(number.value)
         form.reset()
     }
 }

function clearTotal() {
    total.textContent = 0;
}