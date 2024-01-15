var generateButton = document.getElementById("generate");
var resetbutton = document.getElementById('reset')
var madlib = document.getElementById('madlib');
var nounin = document.getElementById('nounin');
var pasttense = document.getElementById('past-verb-in');
var othernoun = document.getElementById('other-noun');

function generate() {
  madlib.textContent = "The " + nounin.value + ' ' + pasttense.value + ' to the store and started screaming and begging for just three dollars, lebron james walked and and gave the man three ' + othernoun.value + " and said 'what is wrong with " + othernoun.value + "s these days, jesus,' then he just left";
}
function reset() {
  nounin.value = '';
  othernoun.value = '';
  pasttense.value = '';
  
  madlib.textContent = '';
}

resetbutton.onclick = reset;

generateButton.onclick = generate;
