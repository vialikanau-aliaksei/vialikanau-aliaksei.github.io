function selectFunc() {
  var selection = document.getElementById("mySelect").value;
  document.getElementsByName("txt")[0].value = "You selected: " + selection;
}

var button = document.getElementById("myButton");

function mouseOver() {
  button.value = "No";
}

function mouseOut() {
  button.value = "Ok";
}

function onCopy() {
  document.getElementById("txt").value = "copied";
}
