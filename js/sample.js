function pets() {
    var inputValue = prompt("Which pet is your favorite? ")
    alert("Really? " + inputValue + "??");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("What a morning to choose " + inputValue + "!");
    } else if (currentHour < 18) {
        alert("What an evening to choose " + inputValue + "!");
    } else {
        alert("What a night to choose " + inputValue + "!");
    }
}

function minOfDay() {
    var currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
    alert("Current Minute of the Day: " + currentMinute);
    alert("(You didn't think it would be as simple as the time, did you?)");
}
function disappear() {
    var dropdown = document.getElementById('dog1')
    dropdown.style.display = "none";
}
function changeTitle() {
    let selectedElement = document.getElementById("table title");
    console.log(selectedElement);
    selectedElement.innerText = "POOPING Schedule";
}
function parentFunction() {
    let a = 1;
    function childFunction() {
        var b = a + 2;
        return b;
    };
    return childFunction();
}
function meow() {
    alert("Meooow");
}
function parseArray(array) {
    var makeList = prompt("");
    array.push(makeList);
    var x = array.sort();
    var y = x.length;
    console.log(x[y-1]);
    console.log(array);
}

var userArray = []
function sortArray(){
  var userInput = document.getElementById('inputTerm').value;
  var userOutput = document.getElementById('outputRow');
  userArray.push(userInput)
  console.log(userArray);
  document.getElementById('tempList').innerHTML = 'Unsorted list: '+userArray.join(", ");
  document.getElementById('inputTerm').value = '';
  if (userArray.length == 4) {
    userArray.sort();
    for (i in userArray) {
      var newLI = document.createElement('li');
      newLI.innerText = userArray[i];
      userOutput.appendChild(newLI);
    }
  };
}

var longestVal = "";
function longestValue(){
  var userInput = document.getElementById('inputTerm').value;
  if (userInput.length > longestVal.length) {
    longestVal = userInput;
  };
  document.getElementById('outputRow').innerText = longestVal;
}