// UTILITY LOGIC 
function noInputtedWord(input) {
  let sInput = input.toString();
  if ((sInput.trim().length === 0)) {
    return alert("Please enter a Number");
  }
}
// BUSINESS LOGIC 
function beepBoop(input, userName) {
  if (noInputtedWord(input) === true) {
    return 0;
  }
  let output = []
  for (let i = 0; i <=  input; i++) {
    let strInput = i.toString();
    if (strInput.includes("3")) {
      output.push(" " + userName + "," + " Won't you be my neighbor?");
    } else if (strInput.includes("2")) {
      output.push(" Boop");
    } else if (strInput.includes("1")){
      output.push(" Beep");
    }  else {
      output.push(" " + i);
    } 
  }
  return output;
}
// UI LOGIC 

$(document).ready(function() {
  $("#form").submit(function(e) {
    e.preventDefault();
    const userName = $("#name-input").val();
    const userInput = $("#input").val();
    console.log(userInput);
    const roboger = beepBoop(userInput, userName).toString();
    console.log(roboger);
    $("#output").text(roboger);
  });
});