window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
};

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = "./img/" + name + ".jpg";
    image.src = name;

    setTimeout(reblur, 5000, image);
};

function reblur(image) {
    var name = image.id;
    name = "./img/" + name + "blur.jpg";
    image.src = name;
}


// window.onload = getMap;
function getMap() {
    var map = document.getElementById("map");
    map.onmouseover = showCoords;
};

function showCoords(eventObjective) {
    var coords = document.getElementById("coords");
    var x = eventObjective.clientX;
    var y = eventObjective.clientY;
    coords.innerHTML = "Map coordinates: " + x + ", " + y;
};

function timerHandler() {
    alert("You waited 5 sec to see this lousy message");
}
setTimeout(timerHandler, 5000);