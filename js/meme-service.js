'use strict'

const STORAGE_KEY_KEYWORDS = 'keywordDB';
const STORAGE_KEY = 'memesDB'
const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];

var gMyMemes;
var gImgs = [{
        id: '1',
        url: "img/1.jpg",
        keywords: ['trump', 'politic', 'funny']
    },
    {
        id: '2',
        url: "img/2.jpg",
        keywords: ['dog', 'animal', 'cute']
    },
    {
        id: '3',
        url: "img/3.jpg",
        keywords: ['dog', 'cute', 'animal', 'baby']
    },
    {
        id: '4',
        url: "img/4.jpg",
        keywords: ['cat', 'animal', 'cute', 'funny']
    },
    {
        id: '5',
        url: "img/5.jpg",
        keywords: ['baby', 'cute', 'funny', 'ambitious']
    },
    {
        id: '6',
        url: "img/6.jpg",
        keywords: ['history', 'crazy', 'funny', 'tv']
    },
    {
        id: '7',
        url: "img/7.jpg",
        keywords: ['baby', 'funny', 'cute']
    },
    {
        id: '8',
        url: "img/8.jpg",
        keywords: ['madhatter', 'disney', 'tv']
    },
    {
        id: '9',
        url: "img/9.jpg",
        keywords: ['baby', 'cute', 'funny']
    },
    {
        id: '10',
        url: "img/10.jpg",
        keywords: ['obama', 'politic']
    },
    {
        id: '11',
        url: "img/11.jpg",
        keywords: ['boxing', 'weird']
    },
    {
        id: '12',
        url: "img/12.jpg",
        keywords: ['funny', 'tv']
    },
    {
        id: '13',
        url: "img/13.jpg",
        keywords: ['dicaprio', 'tv']
    },
    {
        id: '14',
        url: "img/14.jpg",
        keywords: ['matrix', 'tv']
    },
    {
        id: '15',
        url: "img/15.jpg",
        keywords: ['tv', 'gameofthrones']
    },
    {
        id: '16',
        url: "img/16.jpg",
        keywords: ['tv', 'starwar']
    },
    {
        id: '17',
        url: "img/17.jpg",
        keywords: ['putin', 'politic']
    },
    {
        id: '18',
        url: "img/18.jpg",
        keywords: ['toystory', 'tv', 'disney']
    }
];

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: '',
    lines: []
}

var gKeywords = {
    funny: 10,
    animal: 5,
    tv: 3,
    baby: 12
}

function getMeme() {
    return gMeme;
}


function setLineTxt(txt) {
    gMeme.lines.push({})
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    var idxLine = gMeme.selectedLineIdx
    gMeme.lines[idxLine].txt = txt;
    gMeme.lines[idxLine].size = 20;
    gMeme.lines[idxLine].align = 'left';
    gMeme.lines[idxLine].color = 'white';
    gMeme.lines[idxLine].bordercolor = 'white';
    if (idxLine === 0) {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = +100;
    } else if (idxLine === 1) {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = +500;
    } else {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = ((gMeme.lines[idxLine - 1].canvaslocationy + gMeme.lines[idxLine - 2].canvaslocationy) / 2)

    }
}

function changeLine(id) {
    if (gMeme.selectedLineIdx === '') return;
    if (id === '+') {
        if (gMeme.lines[gMeme.selectedLineIdx].canvaslocationy > 20) {
            gMeme.lines[gMeme.selectedLineIdx].canvaslocationy -= 10

        }
    } else {
        if (gMeme.lines[gMeme.selectedLineIdx].canvaslocationy < 580) {
            gMeme.lines[gMeme.selectedLineIdx].canvaslocationy += 10
        }
    }
    return;
}

function getImgs() {
    return gImgs;
}

function setImage(id) {
    gMeme.selectedImgId = id;
}

function setColor(color) {
    if (gMeme.selectedLineIdx === '') return;
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setBorderColor(color) {
    if (gMeme.selectedLineIdx === '') return;
    gMeme.lines[gMeme.selectedLineIdx].bordercolor = color;
}

function changeFontSize(fontChange) {
    if (gMeme.selectedLineIdx === '') return;
    if (fontChange === "-") gMeme.lines[gMeme.selectedLineIdx].size--
        else gMeme.lines[gMeme.selectedLineIdx].size++
}

function deleteLine() {
    if (gMeme.selectedLineIdx === '') return;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);

    if (gMeme.selectedLineIdx === 0) {
        console.log('he')
        gMeme.selectedLineIdx = '';
    } else {
        gMeme.selectedLineIdx--;
    }
}

function switchSentences() {
    if (gMeme.selectedLineIdx === '') return;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
    } else {
        gMeme.selectedLineIdx++;
    }
    console.log(gMeme.selectedLineIdx)
}

function changeLineLocation(location) {
    if (location === 'left') {
        gMeme.lines[gMeme.selectedLineIdx].canvaslocationx = +100;
    } else if (location === 'center') {
        gMeme.lines[gMeme.selectedLineIdx].canvaslocationx = +300;
    } else {
        gMeme.lines[gMeme.selectedLineIdx].canvaslocationx = +500;
    }
}

function getMemesSentences() {
    return memesSentences;
}

function updategMeme(val) {
    gMeme.lines = val
}

function saveToMyMemes() {
    _saveMemesToStorage()
}

function _saveMemesToStorage() {
    gMyMemes = loadFromStorage(STORAGE_KEY)
    if (!gMyMemes || gMyMemes.length === 0) {
        gMyMemes = [];
    }
    gMyMemes.push(gMeme);
    saveToStorage(STORAGE_KEY, gMyMemes)
}

function setLineEmoji(emoji) {
    gMeme.lines.push({})
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    var idxLine = gMeme.selectedLineIdx
    gMeme.lines[idxLine].txt = emoji;
    gMeme.lines[idxLine].size = 20;
    gMeme.lines[idxLine].align = 'left';
    gMeme.lines[idxLine].color = 'white';
    gMeme.lines[idxLine].bordercolor = 'white';
    if (idxLine === 0) {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = +100;
    } else if (idxLine === 1) {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = +500;
    } else {
        gMeme.lines[idxLine].canvaslocationx = +300;
        gMeme.lines[idxLine].canvaslocationy = ((gMeme.lines[idxLine - 1].canvaslocationy + gMeme.lines[idxLine - 2].canvaslocationy) / 2)
    }
}


function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function resetgMeme() {
    gMeme = {
        selectedImgId: '',
        selectedLineIdx: '',
        lines: []
    }

}

function saveToMyKeywords() {
    _saveKeywordsToStorage()
}

function _saveKeywordsToStorage() {
    if (!gKeywords) {
        gKeywords = {};
    }
    saveToStorage(STORAGE_KEY_KEYWORDS, gKeywords)
}

function getgKeywords() {
    gKeywords = loadFromStorage(STORAGE_KEY_KEYWORDS)
    if (!gKeywords) {
        gKeywords = {};
    }
    return gKeywords;
}

function saveTogKeyword(keyword) {
    gKeywords = keyword;
    _saveKeywordsToStorage()
}

// function setLineDrag(isDrag) {
//     console.log(gMeme.isDrag)
//     gMeme.isDrag = isDrag
//     console.log(gMeme.isDrag)
// }


// function moveLine(dx, dy) {
//     gMeme.pos.x += dx
//     gMeme.pos.y += dy

// }

// function isLineClicked(clickedPos) {
//     const { pos } = gMeme
//     console.log(pos)
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <= gMeme.size
// }