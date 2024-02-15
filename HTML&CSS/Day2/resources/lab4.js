function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function findFactorial() {
  // Prompt for user input
  var userInput = prompt("Enter a number to find its factorial:");

  // Convert user input to a number
  var number = parseInt(userInput);

  // Check if the conversion is successful and the input is a number
  if (!isNaN(number)) {
    // Calculate factorial
    var result = factorial(number);

    // Display result in a prompt
    alert("Factorial of " + number + " is: " + result);

    // Add the result to the table
    addToTable(number, result);
  } else {
    // Display an error for invalid input
    alert("Error: Please enter a valid number.");
  }
}

function addToTable(number, result) {
    var tableBody = document.getElementById("factorialTableBody");
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = number;
    cell2.textContent = result;
  }

  function populateTable() {
    var tableBody = document.getElementById("factorialTableBody");

    for (var i = 1; i <= 10; i++) {
      var newRow = tableBody.insertRow();
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);

      // Populate the cells with the number and its factorial
      cell1.textContent = i;
      cell2.textContent = factorial(i);
    }
  }

  window.onload = populateTable;
