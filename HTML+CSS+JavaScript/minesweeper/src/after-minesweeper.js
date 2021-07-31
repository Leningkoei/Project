function clickButton(oldElem) {
    document.oncontextmenu = function(event) {
        event.preventDefault();
    }
    //      左键点击;
    if (event.button == 0) {
        if (oldElem.name == "boom") {
            alert("nmsl");
        }
        else {
            var newElem;
            newElem = document.createElement("label");
            newElem.id = oldElem.id;
            newElem.innerHTML = "-1-";
            oldElem.parentNode.replaceChild(newElem, oldElem);
        }
    }
    //      右键点击;
    else if (event.button == 2) {
        var newElem;
        newElem.id = oldElem.id;
        newElem = document.createElement("label");
        newElem.innerHTML = "-x-";
        oldElem.parentNode.replaceChild(newElem, oldElem);
    }
}
function createBoom() {
    var id;
    var x;
    var y;
    var i;
    for (i = 0; i < 5; i++) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        if (x > 4 || y > 4) {
            i--;
        }
        else {
            id = x * 5 + y;
            elem = document.getElementById(id.toString());
            if (elem.name == "boom") {
                i--;
            }
            else {
                elem.name = "boom";
            }
        }
    }
}
function afterMinesweeper() {
    createBoom();
}
window.onload = afterMinesweeper();
