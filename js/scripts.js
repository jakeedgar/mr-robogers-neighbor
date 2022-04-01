// UTILITY LOGIC 
function noInputtedWord(input) {
  let sInput = input.toString();
  if ((sInput.trim().length === 0)) {
    return alert("Please enter a Number");
  }
}

// function filterPunctuation(input) {
//   return input.split("").filter(function(number) {
//     return !".?,!;:'\"%$#@!^&*()_-+=\\|[]{}`~/".includes(number);
//   }).join("");
// }

// BUSINESS LOGIC 
function beepBoop(input) {
  if (noInputtedWord(input) === true) {
    return 0;
  }
  let output = []
  for (let i = 0; i <= input; i++) {
    let strInput = i.toString();
    if (strInput.includes("3")) {
      output.push("Won't you be my neighbor?");
    } else if (strInput.includes("2")) {
      output.push("Boop");
    } else {
      output.push(i);
    } 
  }
  return output;
}
// UI LOGIC 