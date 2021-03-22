function pets() {
    var inputValue = prompt("Which of my pets is your favorite? ")
    if (inputValue == "Echo") {
        alert("She's my sweet fluffy girl :)");
    } else if (inputValue == "echo") {
        alert("She's my sweet fluffy girl :)");
    } else if (inputValue == "Taako") {
        alert("He's a super cool frog!");  
    } else if (inputValue == "taako") {
        alert("He's a super cool frog!");  
    } else if (inputValue == "Lup") {
        alert("She certainly loves to jump!");
    } else if (inputValue == "lup") {
        alert("She certainly loves to jump!");
    } else if (inputValue == "Oracle") {
        alert("She gives very good (and very strong) hugs!");
    } else if (inputValue == "oracle") {
        alert("She gives very good (and very strong) hugs!");
    } else {
        alert("Really? " + inputValue + "?");
        alert("That's... not one of my pets. Maybe check out that tab?");
    }
}

function realTime() {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    alert("It is " + hour + ":" + minute);
    if (hour < 5) {
        alert("(Please go to bed)");
    }
}

function min() {
    var currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
    alert("Current Minute of the Day: " + currentMinute);
    alert("Got you - it's a tricky clock!");
}

function disappear() {
    var dropdown = document.getElementById('vanishingPic')
    dropdown.style.display = "none";
}
function changeTitle() {
    let selectedElement = document.getElementById("table title");
    console.log(selectedElement);
    selectedElement.innerText = "I love to work!";
}

function niceWork() {
    alert("Thanks! I'm trying my best.");
}
