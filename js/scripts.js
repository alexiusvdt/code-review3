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
  console.log('beepboop begins');
  for (let i = 0; i <= inputArray.length; i++) {
    const element = i.toString();
    if (element.includes(1)) {
      outputArray.push("Beep!")
      console.log("element matched!", i)
    } else {
      outputArray.push(element);
    }

  }
  return outputArray
}
