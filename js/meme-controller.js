'use strict'

var gCanvas;
var gCtx;

function init() {
    elMemeGallery = document.querySelector('.meme-gallery')
    elMemeGallery.style.display = 'block'
}

function renderMeme(txt) {
    var meme = getMeme()
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(meme.selectedImgId)
    drawText(txt, 300, 100, meme.lines[0].size, meme.lines[0].color, meme.lines[0].bordercolor)
}

function onSetLineTxt() {
    var elTxt = document.querySelector('input').value;
    setLineTxt(elTxt)
    document.querySelector('input').value = '';
    renderMeme(elTxt)
}

function onSetColor(ev) {
    var color = ev.value
    console.log(color)
    setColor(color);
    renderMeme();
}

function onSetBorderColor(ev) {
    var bordercolor = ev.value
    console.log(bordercolor)
    setBorderColor(bordercolor);
    renderMeme();
}

function onChangeFontSize(ev) {
    var fontSize = ev.id
    changeFontSize(fontSize)
    renderMeme()
}

function drawImg(id) {
    var elImg = document.getElementById(id);
    // Naive approach:
    // there is a risk that image is not loaded yet and nothing will be drawn on canvas
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function drawText(text, x, y, fontSize, color, bordercolor) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = bordercolor;
    gCtx.fillStyle = color;
    gCtx.font = `${fontSize}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}