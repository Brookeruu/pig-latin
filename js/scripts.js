
function makeInputArray(inputString, separator) {
  return (inputString.split(separator));
}


function pigLatinTranslator(inputArray, vowels) {
  var newArray =[];
  if (vowels.includes(inputArray[0])) {
    return inputArray.concat(["w","a","y"])
  }
  else if (consonantArray.includes(inputArray[0])) {
    var moveConsonant = inputArray.shift();
    return (inputArray.concat(moveConsonant)).concat(["a","y"]);
  }
}


var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var exceptionsArray = ["y", "Y"];


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

  var userString = $("#inputText").val();
  var userArray = makeInputArray(userString, "");
  var result = pigLatinTranslator(userArray, vowelArray);

  console.log(userArray);
  console.log(result);

  });
});
