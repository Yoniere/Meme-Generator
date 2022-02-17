'use strict'

function renderGallery() {
    var imgs = getImgs();

    var strHTML = '';
    strHTML = imgs.map(function(img) {
        return strHTML = `<button class="gallery-images"><img onclick="onImageSelect(this)" id="${img.id}" src="${img.url}"></button>`
    })
    var elMemeGallery = document.querySelector('.meme-gallery');
    elMemeGallery.innerHTML = strHTML.join('');
}

function onImageSelect(ev) {
    console.log(ev)
    setImage(ev.id);
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    renderMeme()
}

function onFlexibleClick() {
    var randImg = getImgs()

    var randnum = getRandomIntInclusive(1, 18)
    console.log(randImg[randnum].id)
    onImageSelect(randImg[randnum].id)

}