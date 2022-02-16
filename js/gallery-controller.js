'use strict'

function renderGallery() {
    var imgs = getImgs();

    var strHTML = '';
    strHTML = imgs.map(function(img) {
        return strHTML = `<button><img onclick="onImageSelect(this)" id="${img.id}" src="${img.url}"></button>`
    })
    var elMemeGallery = document.querySelector('.meme-gallery');
    elMemeGallery.innerHTML = strHTML.join(',');
}

function onImageSelect(ev) {
    setImage(ev.id);
    renderMeme()

}