//ui logik
window.addEventListener("load", function() {
  document.querySelector("form#counter").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission() {
  event.preventDefault();
  let countTo = document.getElementById("count-to").value;
  let inputArray = beepBoop(countTo);
  console.log(inputArray)
}



//business logik
function beepBoop(countTo) {
  let inputArray = [];
  let indexLength = parseInt(countTo);
  for (let i = 0; i <= indexLength; i++) {
  inputArray.push(i);
  }
  return inputArray;
} 