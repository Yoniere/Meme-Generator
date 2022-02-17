'use strict'

function renderGallery() {
    var imgs = getImgs();

    var strHTML = '';
    strHTML = imgs.map(function(img) {
        return strHTML = `<button class="gallery-images"><img onclick="onImageSelect('${img.id}')" id="${img.id}" src="${img.url}"></button>`
    })
    var elMemeGallery = document.querySelector('.meme-gallery');
    elMemeGallery.innerHTML = strHTML.join('');
}

function onImageSelect(imageId) {
    console.log(imageId)
    setImage(imageId);
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    renderMeme()
}

function onFlexibleClick() {
    var FlexibleObject = getFlexibleObject()
    onUpdategMeme(FlexibleObject)
    var randNum = getRandomIntInclusive(1, 18);
    onImageSelect(randNum)
}

function onUpdategMeme(val) {
    updategMeme(val);
}

function getFlexibleObject() {
    var numOfSentences = getRandomIntInclusive(1, 2);
    var flexibleMeme = getMeme();
    for (var i = 0; i < numOfSentences; i++) {
        flexibleMeme.lines.push({});
        var currSentence = getMemesSentences()
        flexibleMeme.lines[i].txt = currSentence[getRandomIntInclusive(1, 15)];
        flexibleMeme.lines[i].size = getRandomIntInclusive(15, 50);
        flexibleMeme.lines[i].color = getRandomColor()
        flexibleMeme.lines[i].bordercolor = getRandomColor()
        flexibleMeme.lines[i].align = 'left'
        if (i === 0) {
            flexibleMeme.lines[i].canvaslocationx = 300;
            flexibleMeme.lines[i].canvaslocationy = 100;
        } else {
            flexibleMeme.lines[i].canvaslocationx = 300;
            flexibleMeme.lines[i].canvaslocationy = 500;
        }
        return flexibleMeme.lines
    }
}