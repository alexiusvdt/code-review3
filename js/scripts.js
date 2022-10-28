//ui logik
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission() {
  event.preventDefault();
  let countTo = document.getElementById("count-to").value;
  const inputArray = userInputArray(countTo);
  // console.log("beginning beep boopification")
  let outputArray = beepBooper(inputArray);
  // console.log("beeps = booped, output:", outputArray);
  printToUser(outputArray);
}

function printToUser(outputArray) {
  const p = document.createElement("p");
  const h2 = document.createElement("h2");
  const h4 = document.createElement("h4");
  outputArray = outputArray.join(", ");
  p.append(outputArray);
  h2.append("Thanks for the input, neighbor!")
  h4.append("Here's what I've got for you:")
  document.getElementById("results-div").append(h2);
  document.getElementById("results-div").appendChild(h4);
  document.getElementById("results-div").appendChild(p);
}

//business logik
let outputArray = [];
let inputArray = [];

function userInputArray(countTo) {
  let indexLength = parseInt(countTo);
    for (let i = 0; i <= indexLength; i++) {
    inputArray.push(i);
    }
    return inputArray;
} 

function beepBooper (inputArray) {
  console.log('beepboop begins, heres the userarray', inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    let element = i.toString();
    if (element.includes(3)) {
      outputArray.push("Won't you be my neighbor?");
      console.log("element contains 3!", i);
    } else if (element.includes(2)) {
      console.log("element contains a 2!", i);
      outputArray.push("Boop!");
    } else if (element.includes(1)) {
      console.log("element contains a 1!", i);
      outputArray.push("Beep!")
    } else {
      outputArray.push(element);
    }
  }
  return outputArray
}
