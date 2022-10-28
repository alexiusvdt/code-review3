//ui logik
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission() {
  event.preventDefault();
  let countTo = document.getElementById("count-to").value;
  const inputArray = userInputArray(countTo);
  console.log("beginning beep boopification")
  let outputArray = beepBooper(inputArray);
  console.log("beeps have booped, here's the output", outputArray);
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
    if (element.includes(2)) {
      outputArray.push("Boop!");
      console.log("element contains 2!", i);
    } else if (element.includes(1)) {
      console.log("element contains a 1!", i);
      outputArray.push("Beep!");
    } else {
      outputArray.push(element);
    }
  }
  return outputArray
}
