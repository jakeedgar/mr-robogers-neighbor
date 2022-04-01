// UTILITY LOGIC 
function noInputtedWord(input) {
  if ((input.trim().length === 0)) {
    return alert("Please enter a Number");
  }
}

function filterPunctuation(input) {
  return input.split("").filter(function(number) {
    return !".?,!;:'\"%$#@!^&*()_-+=\\|[]{}`~/".includes(number);
  }).join("");
}

// BUSINESS LOGIC 
function beepBoop(input) {
  let output = []
  for (let i = 0; i <= input; i++) {
    let strInput = i.toString();
    if (strInput.includes("3")) {
      output.push("Won't you be my neighbor?");
    } else {
      output.push(i);
    } 
  }
  return output;
}
// UI LOGIC 