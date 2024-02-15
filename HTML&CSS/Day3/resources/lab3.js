
document.addEventListener("mouseup", function () {
    isDragging = false;
    draggableImage.style.cursor = "grab";
});

var draggableImage = document.getElementById("draggableImage");
var offsetX, offsetY, isDragging = false;

draggableImage.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - draggableImage.getBoundingClientRect().left;
    offsetY = e.clientY - draggableImage.getBoundingClientRect().top;
    draggableImage.style.cursor = "grabbing";
});

document.addEventListener("mousemove", function (e) {
    if (isDragging) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;

        draggableImage.style.left = x + "px";
        draggableImage.style.top = y + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    draggableImage.style.cursor = "grab";
});