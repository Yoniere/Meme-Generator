'use strict'

// var gImgs = [{
//         id: '1',
//         url: "img/1.jpg",
//         keywords: []
//     },
//     {
//         id: '2',
//         url: "img/2.jpg",
//         keywords: []
//     }
// ];

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: '',
    lines: [{
        txt: '',
        size: 0,
        align: '',
        color: ''
    }]
}

function getMeme() {
    return gMeme;
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt;
    console.log(gMeme)
}