
// Initialize history array to store calculation history
let history = [];

// Function to execute when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements from the DOM
  const operand1Input = document.getElementById("operand1");
  const operand2Input = document.getElementById("operand2");
  const operatorSelect = document.getElementById("operator");
  const expressionDiv = document.getElementById("expression");

  const resultBtn = document.getElementById("result-btn");
  const clearBtn = document.getElementById("clear-btn");
  const clearHistoryBtn = document.getElementById("clear-history-btn");
  const historyBtn = document.getElementById("history-btn");
// Add event listeners to input fields and select dropdown
  operand1Input.addEventListener("input", updateExpression);
  operand2Input.addEventListener("input", updateExpression);
  operatorSelect.addEventListener("change", updateExpression);

 // Call the appropriate functions when button is clicked for smoother experience of calculations
  resultBtn.addEventListener("click", function() {
    calculate();
});
clearBtn.addEventListener("click",function(){
  clearExpression();
});
clearHistoryBtn.addEventListener("click",function(){
  clearHistory();
});

historyBtn.addEventListener("click",function(){
  showHistory();
});


 // Function to update expression display
  function updateExpression() {
    // taking inputs from the user
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    const operator = operatorSelect.value;

    let expression = "";

    if (!isNaN(operand1)) {
      expression += operand1;
    }
    if (operator) {
      expression += ` ${operator}`;
    }
    if (!isNaN(operand2)) {
      expression += ` ${operand2}`;
    }

    expressionDiv.innerText = `Expression: ${expression}`;
  }
});


// Function to perform calculation
function calculate() {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);
  const operator = document.getElementById("operator").value;
  let result;

  // Perform calculation based on operator
  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "x":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;

    case "%":
      result = percentage(operand1, operand2);
      break;

     case "^":
        result= power(operand1, operand2);
        break;  

    case "":
      if (!operand1 && !operand2) 
      result = "";
      else 
       result = "Invalid Operator";
      break;
    
    default:
      result = "Invalid operator";
  }
  // Displaying result after handling all the edge cases and displaying error message.
  if((isNaN(operand1) || isNaN(operand2)) && (!isNaN(operand1) && operator!=="%"))
  result="Enter both the Operands !";

  else if(isNaN(operand1) && operator=="%" && !isNaN(operand2))
  result="Operand 1 is mandatory for calculating the Percentage !";

  else if((isNaN(operand1) && isNaN(operand2)) && operator=="%")
  result="Enter the operands for calculating percentage !";

  else if((isNaN(operand1) && isNaN(operand2)) && operator!=="")
  result="Enter the operands for calculations!";

  document.getElementById("result").innerText = `Result: ${result}`;
  
  // Push calculation to history array
  history.push(`${operand1} ${operator} ${operand2} = ${result}`);
}


// Function to clear input fields and expressions
function clearExpression() {
  document.getElementById("operand1").value = "";
  document.getElementById("operand2").value = "";
  document.getElementById("operator").selectedIndex = 0;
  document.getElementById("expression").innerText = "Expression:";
  document.getElementById("result").innerText = "Result:";
}

// Function to clear history
function clearHistory() {
  history = [];
  document.getElementById("history").innerText = "";
}

// Function to show history
function showHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.innerText = "";
  // Check if history is available
  if (history.length === 0) {
    historyDiv.innerText = "No history available !";
  } else {
    historyDiv.innerText = "History:";
       // Display each history item
    history.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      historyDiv.appendChild(p);
    });
  }
}


// Basic arithmetic operations functions each separately as asked in the asssignment1 of calculator
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function percentage(a, b) {
  if (!b) return a / 100; //This gives the value by dividing it by 100 as the real mobile calculator works practically.
  else return (a / b) * 100; //This returns the value after calculating the percentage of operand 1 out of operand 2.
}
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
function power(a, b)
{
  return Math.pow(a,b);
}