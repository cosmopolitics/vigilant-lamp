var text = "sample text";
var search = "m";
var location = "";

function indexofchr(text, search) {
  for (let i = 0; i < text.length; i++) {
    if (text[i].match(search) != null) {
      location = i;
      break;
    } else {
      location = "Theres nothing";
    }
  }
  return location;
}
console.log(indexofchr(text, search));

