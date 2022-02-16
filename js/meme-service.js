'use strict'

var gImgs = [{
        id: '1',
        url: "img/1.jpg",
        keywords: []
    },
    {
        id: '2',
        url: "img/2.jpg",
        keywords: []
    }
];

var gMeme = {
    selectedImgId: "",
    selectedLineIdx: '',
    lines: [{
        txt: '',
        size: 20,
        align: 'left',
        color: 'white',
        bordercolor: 'black'
    }]
}

function getMeme() {
    return gMeme;
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt;
    console.log(gMeme)
}

function getImgs() {
    return gImgs;
}

function setImage(id) {
    gMeme.selectedImgId = id;
    console.log(gMeme)
}

function setColor(color) {
    gMeme.lines[0].color = color;
    console.log(gMeme);
}

function setBorderColor(color) {
    gMeme.lines[0].bordercolor = color;
    console.log(gMeme);
}

function changeFontSize(fontChange) {
    if (fontChange === "-") gMeme.lines[0].size--
        else gMeme.lines[0].size++
            console.log(gMeme.lines[0].size)
}