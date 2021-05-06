function makeMap(){
    var items;
    var i;

    items = document.getElementById("nav").getElementsByTagName("li");
    for (i = 0; i < items.length; i++){
        items[i].onmouseover = function(){
            this.className = "mouseOver";
        }
        items[i].onmouseout = function(){
            this.className = "";
        }
    }
}
function afterMain(){
    makeMap();
}
window.onload = afterMain();
