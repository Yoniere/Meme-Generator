'use strict'

// canvas related variables
var gCanvas = document.getElementById('my-canvas');
var gCtx = gCanvas.getContext('2d');

// variables used to get mouse position on the canvas
var canvas = document.getElementById('my-canvas');
var canvasOffset = canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = canvas.scrollLeft();
var scrollY = canvas.scrollTop();

// variables to save last mouse position
// used to see how far the user dragged the mouse
// and then move the text by that distance
var startX;
var startY;

// an array to hold text objects

// this var will hold the index of the hit-selected text
var selectedText = -1;

// clear the canvas & redraw all texts
function draw() {
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    for (var i = 0; i < gMeme.lines[selectedLineIdx]; i++) {
        var text = gMeme.lines[selectedLineIdx];
        ctx.fillText(text.txt, text.x, text.y);
    }
}

// test if x,y is inside the bounding box of texts[textIndex]
function textHittest(x, y, textIndex) {
    var text = gMeme.lines[selectedLineIdx][textIndex];
    return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y);
}

// handle mousedown events
// iterate through texts[] and see if the user
// mousedown'ed on one of them
// If yes, set the selectedText to the index of that text
function handleMouseDown(e) {
    e.preventDefault();
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);
    // Put your mousedown stuff here
    for (var i = 0; i < gMeme.lines[selectedLineIdx]; i++) {
        if (textHittest(startX, startY, i)) {
            selectedText = i;
        }
    }
}

// done dragging
function handleMouseUp(e) {
    e.preventDefault();
    selectedText = -1;
}

// also done dragging
function handleMouseOut(e) {
    e.preventDefault();
    selectedText = -1;
}

// handle mousemove events
// calc how far the mouse has been dragged since
// the last mousemove event and move the selected text
// by that distance
function handleMouseMove(e) {
    if (selectedText < 0) {
        return;
    }
    e.preventDefault();
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;

    var text = gMeme.lines[selectedLineIdx];
    text.x += dx;
    text.y += dy;
    draw();
}

// listen for mouse events
document.getElementById("canvas").mousedown(function(e) {
    handleMouseDown(e);
});
document.getElementById("canvas").mousemove(function(e) {
    handleMouseMove(e);
});
document.getElementById("canvas").mouseup(function(e) {
    handleMouseUp(e);
});
document.getElementById("canvas").mouseout(function(e) {
    handleMouseOut(e);
});

document.getElementById("canvas").click(function() {

    // calc the y coordinate for this text on the canvas
    var y = gMeme.lines[selectedLineIdx] * 20 + 20;

    // get the text from the input element
    var text = {
        text: $("#theText").val(),
        x: 20,
        y: y
    };

    // calc the size of this text for hit-testing purposes
    ctx.font = "16px verdana";
    text.width = ctx.measureText(text.text).width;
    text.height = 16;

    // put this new text in the texts array
    texts.push(text);

    // redraw everything
    draw();

});