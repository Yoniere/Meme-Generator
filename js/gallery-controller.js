'use strict'

function renderGallery() {
    var imgs = getImgs();

    var strHTML = '';
    strHTML = imgs.map(function(img) {
        return strHTML = `<button class="gallery-images"><img onclick="onImageSelect('${img.id}')" id="${img.id}" src="${img.url}"></button>`
    })
    var elMemeGallery = document.querySelector('.meme-gallery');
    elMemeGallery.innerHTML = strHTML.join('');
    renderKeywords()
}

function onImageSelect(imageId) {
    document.querySelector('.meme-type').value = '';
    setImage(imageId);
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.btn-flexible').style.display = 'none'
    document.querySelector('.search').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'flex'
    var key = keywordsCounter(imageId)
    saveTogKeyword(key)
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
        flexibleMeme.lines[i].txt = currSentence[getRandomIntInclusive(0, 14)];
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

function filterGallery(val) {
    var imgs = getImgs();
    var filteredImages = imgs.filter(img => img.keywords.find(k => k.startsWith(val)))

    var strHTML = '';
    strHTML = filteredImages.map(function(img) {
        return strHTML = `<button class="gallery-images"><img onclick="onImageSelect('${img.id}')" id="${img.id}" src="${img.url}"></button>`
    })
    var elMemeGallery = document.querySelector('.meme-gallery');
    elMemeGallery.innerHTML = strHTML.join('');

}

function keywordsCounter(imageId) {
    gKeywords = getgKeywords()
    console.log(gKeywords)
    var image = getImgs();
    var res = image[imageId - 1].keywords.map(function(word) {
        if (!gKeywords[word]) gKeywords[word] = 0;
        gKeywords[word]++;
        console.log(gKeywords)
        return gKeywords;
    })

    return gKeywords;
}

function renderKeywords() {
    var gKeywords = getgKeywords()
        // gKeywords
    var elKeywords = document.querySelector('.keywords-counter');
    var strHTML = '';

    for (const key in gKeywords) {
        console.log(`${key}: ${gKeywords[key]}`)
        strHTML += `<div class="flex" style="font-size:${gKeywords[key]+16}px">${key}</div> `
    }
    elKeywords.innerHTML = strHTML;
}