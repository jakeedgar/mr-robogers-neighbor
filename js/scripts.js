// UTILITY LOGIC 
function noInputtedWord(text) {
  if ((text.trim().length === 0)) {
    return alert("Please enter a Number");
  }
}

function filterPunctuation(word) {
  return word.split("").filter(function(character) {
    return !".?,!;:'\"%$#@!^&*()_-+=\\|[]{}`~/".includes(character);
  }).join("");
}

// BUSINESS LOGIC 
function beepBoop(input) {
  if (noInputtedWord(text)) {
    return 0;
  }
  
  for (i = 0; i <= input; i++)
  console.log(i)
}

// UI LOGIC 