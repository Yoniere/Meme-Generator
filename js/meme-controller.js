'use strict'

var gCanvas;
var gCtx;


function init() {
    elMemeGallery = document.querySelector('.meme-gallery')
    elMemeGallery.style.display = 'block'
}

function renderMeme() {
    var meme = getMeme()
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    drawImg(meme.selectedImgId);
    var currline = meme.lines;
    if (currline.length === 0) return;
    meme.lines.forEach(line => {
        drawText(line.txt, line.canvaslocationx, line.canvaslocationy, line.size, line.color, line.bordercolor)
        console.log(currline);
    });
    //     drawText(currline[i].txt, 300, 100, currline[i].size, currline[i].color, currline[i].bordercolor);
    // }
    // drawText(meme.lines[1].txt, 300, 600, meme.lines[1].size, meme.lines[1].color, meme.lines[1].bordercolor);
}

function onSetLineTxt() {
    var elTxt = document.querySelector('input').value;
    if (!elTxt) return;
    console.log(elTxt)
    setLineTxt(elTxt)
    document.querySelector('input').value = '';
    renderMeme()
}

function onSetColor(color) {
    // var color = color.value
    console.log(color)
    setColor(color);
    renderMeme();
}

function onSetBorderColor(color) {
    var bordercolor = color
    console.log(bordercolor)
    setBorderColor(bordercolor);
    renderMeme();
}

function onChangeFontSize(size) {
    // var fontSize = ev.id
    changeFontSize(size)
    renderMeme()
}

function onSwitchSentences() {
    switchSentences()
    renderMeme()
}

function onDeleteLine() {
    deleteLine();
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
    // gCtx.strokeText(text, x, y);
}

function onChangeLine(id) {
    changeLine(id);
    renderMeme();
}

function onChangeLineLocation(location) {
    // console.log(ev.id)
    changeLineLocation(location)
    renderMeme()
}



// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container')
//         // Note: changing the canvas dimension this way clears the canvas
//     gCanvas.width = elContainer.offsetWidth - 20
//         // Unless needed, better keep height fixed.
//         //   gCanvas.height = elContainer.offsetHeight
// }