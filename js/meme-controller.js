'use strict'

var gCanvas;
var gCtx;

// function init() {
//     elMemeGallery = document.querySelector('.meme-gallery')
//     elMemeGallery.style.display = 'block'
// }
renderMeme()

function renderMeme(txt) {
    var meme = getMeme()
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg()
    drawText(txt, 300, 100)
}

function onSetLineTxt() {
    var elTxt = document.querySelector('input').value;
    setLineTxt(elTxt)
    document.querySelector('input').value = '';
    renderMeme(elTxt)
}

function drawImg() {
    var elImg = document.querySelector('img');
    // Naive approach:
    // there is a risk that image is not loaded yet and nothing will be drawn on canvas
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function drawText(text, x, y) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}