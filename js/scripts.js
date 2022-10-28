//ui 
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission() {
  event.preventDefault();
  resetResults();
  let neighborName = document.getElementById("name").value;
  let countTo = document.getElementById("count-to").value;
  let isValidInput = validInput(countTo);
    if (isValidInput === true) {
      let inputArray = userInputArray(countTo);
      let outputArray = beepBooper(inputArray, neighborName);
      printToUser(outputArray, neighborName);
    } else {
      let p = document.createElement("p");
      let span = document.createElement("span")
      document.getElementById("results-div").appendChild(span);
      span.id = "results-span";
      p.append("ERROR: Sorry " + neighborName + ", Mr. Roboger can only handle input of integer values from 0-9. Please try again without text, whitespace, or special characters!");
      document.getElementById("results-span").appendChild(p);
    }
}

function printToUser(outputArray, neighborName) {
  let p = document.createElement("p");
  let h2 = document.createElement("h2");
  let h4 = document.createElement("h4");
  let span = document.createElement("span")
  document.getElementById("results-div").appendChild(span);
  span.id = "results-span";
  outputArray = outputArray.join(", ");
  p.append(outputArray);
  h2.append("Thanks for the input, " + neighborName + "!");
  h4.append("Here's what I've got for you:");
  document.getElementById("results-span").append(h2);
  document.getElementById("results-span").appendChild(h4);
  document.getElementById("results-span").appendChild(p);
}

function resetResults() {
  const element = document.getElementById("results-span");
  element.remove();
}


//business 

function validInput(countTo) {
  let regexTest = /\D/g;
    if (regexTest.test(countTo) === false) {
      return true
    } else {
      return false
    }
}

function userInputArray(countTo) {
  inputArray = [];
  let indexLength = parseInt(countTo);
    for (let i = 0; i <= indexLength; i++) {
    inputArray.push(i);
    }
    return inputArray;
} 

function beepBooper (inputArray, neighborName) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let element = i.toString();
      if (element.includes(3)) {
        outputArray.push("Won't you be my neighbor, " + neighborName + "?");
      } else if (element.includes(2)) {
        outputArray.push("Boop!");
      } else if (element.includes(1)) {
        outputArray.push("Beep!")
      } else {
        outputArray.push(element);
      }
    }
  return outputArray
}
