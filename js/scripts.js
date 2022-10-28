//ui logik
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission() {
  event.preventDefault();
  resetResults();
  let countTo = document.getElementById("count-to").value;
  let isValidInput = validInput(countTo);
  console.log("regex match", isValidInput);
    if (isValidInput === true) {
      let inputArray = userInputArray(countTo);
      // console.log("beginning beep boopification")
      let outputArray = beepBooper(inputArray);
      // console.log("beeps = booped, output:", outputArray);
      printToUser(outputArray);
    } else {
      let p = document.createElement("p");
      let span = document.createElement("span")
      document.getElementById("results-div").appendChild(span);
      span.id = "results-span";
      p.append("ERROR: Mr. Roboger can only handle input of values 0-9, please try again without text, whitespace, or characters!");
      document.getElementById("results-span").appendChild(p);
    }
  }

function printToUser(outputArray) {
  let p = document.createElement("p");
  let h2 = document.createElement("h2");
  let h4 = document.createElement("h4");
  let span = document.createElement("span")
  document.getElementById("results-div").appendChild(span);
  span.id = "results-span";
  
  // p.className = "display";
  // h2.className = "display";
  // h4.className = "display";
  outputArray = outputArray.join(", ");
  p.append(outputArray);
  h2.append("Thanks for the input, neighbor!");
  h4.append("Here's what I've got for you:");
  document.getElementById("results-span").append(h2);
  document.getElementById("results-span").appendChild(h4);
  document.getElementById("results-span").appendChild(p);
  document.getElementById("results-div").removeAttribute("class");
}

function resetResults() {
  const element = document.getElementById("results-span");
  element.remove();
}


//business logik

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

function beepBooper (inputArray) {
  let outputArray = [];
  console.log('beepboop begins, heres the userarray', inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    let element = i.toString();
    if (element.includes(3)) {
      outputArray.push("Won't you be my neighbor?");
      // console.log("element contains 3!", i);
    } else if (element.includes(2)) {
      // console.log("element contains a 2!", i);
      outputArray.push("Boop!");
    } else if (element.includes(1)) {
      // console.log("element contains a 1!", i);
      outputArray.push("Beep!")
    } else {
      outputArray.push(element);
    }
  }
  return outputArray
}
