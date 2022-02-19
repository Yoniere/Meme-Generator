'use strict'

function openMyMemes() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.my-memes').style.display = 'block'
    renderMyMemesGallery()
}

function renderMyMemesGallery() {
    var memes = loadFromStorage(STORAGE_KEY)
    if (!memes || memes.length === 0) {
        return;
    }
    var imgs = getImgs()
    var strHTML = '';
    strHTML = memes.map(function(meme) {
        return strHTML = `<button class="my-memes-gallery-images"><img onclick="onImageSelect('${meme.selectedImgId}')" id="${meme.selectedImgId}" src="${imgs[meme.selectedImgId-1].url}"></button>`
    })
    var elMemeGallery = document.querySelector('.my-memes');
    elMemeGallery.innerHTML = strHTML.join('');
}