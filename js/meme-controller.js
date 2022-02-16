'use strict'

var gCanvas;
var gCtx;


function init() {
    const elMemeGallery = document.querySelector('.meme-gallery')
    elMemeGallery.style.display = 'block'
}

function renderMeme() {
    elMemeGallery.style.display = 'none'
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    const elMemeEditor = document.querySelector('.meme-editor')
    elMemeGallery.style.display = 'block'

}

function pickImageForCanvas(this) {
    console.log('hello')
}