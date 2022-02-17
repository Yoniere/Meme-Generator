'use strict'

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
var gCurrLine = -1;
var gImgs = [{
        id: '1',
        url: "img/1.jpg",
        keywords: []
    },
    {
        id: '2',
        url: "img/2.jpg",
        keywords: []
    },
    {
        id: '3',
        url: "img/3.jpg",
        keywords: []
    },
    {
        id: '4',
        url: "img/4.jpg",
        keywords: []
    },
    {
        id: '5',
        url: "img/5.jpg",
        keywords: []
    },
    {
        id: '6',
        url: "img/6.jpg",
        keywords: []
    },
    {
        id: '7',
        url: "img/7.jpg",
        keywords: []
    },
    {
        id: '8',
        url: "img/8.jpg",
        keywords: []
    },
    {
        id: '9',
        url: "img/9.jpg",
        keywords: []
    },
    {
        id: '10',
        url: "img/10.jpg",
        keywords: []
    },
    {
        id: '11',
        url: "img/11.jpg",
        keywords: []
    },
    {
        id: '12',
        url: "img/12.jpg",
        keywords: []
    },
    {
        id: '13',
        url: "img/13.jpg",
        keywords: []
    },
    {
        id: '14',
        url: "img/14.jpg",
        keywords: []
    },
    {
        id: '15',
        url: "img/15.jpg",
        keywords: []
    },
    {
        id: '16',
        url: "img/16.jpg",
        keywords: []
    },
    {
        id: '17',
        url: "img/17.jpg",
        keywords: []
    },
    {
        id: '18',
        url: "img/18.jpg",
        keywords: []
    }
];

var gMeme = {
    selectedImgId: '',
    selectedLineIdx: '',
    lines: [
        // {
        // txt: '',
        // size: 20,
        // align: 'left',
        // color: 'white',
        // bordercolor: 'black'
        // }
        // ,
        // {
        //     txt: 'Armed in knowledge',
        //     size: 20,
        //     align: 'left',
        //     color: 'white',
        //     bordercolor: 'black'
        // }
    ]
}

function getMeme() {
    return gMeme;
}


function setLineTxt(txt) {
    gMeme.lines.push({})
    gCurrLine++
    // if (gCurrLine < 0) {
    // console.log('he')
    gMeme.lines[gCurrLine].txt = txt;
    gMeme.lines[gCurrLine].size = 20;
    gMeme.lines[gCurrLine].align = 'left';
    gMeme.lines[gCurrLine].color = 'white';
    gMeme.lines[gCurrLine].bordercolor = 'white';
    // gCurrLine = 0;
    // } else {
    // gCurrLine++;
    // gMeme.lines[gCurrLine].txt = txt;
    // gMeme.lines[gCurrLine].size = 20;
    // gMeme.lines[gCurrLine].align = 'left';
    // gMeme.lines[gCurrLine].color = 'white';
    // gMeme.lines[gCurrLine].bordercolor = 'white';
    // }
    console.log(gCurrLine)
}

// function changeLine(id) {
//     if (id === '-' && gCurrLine === 0 || id === '+' && gMeme.lines.length === gCurrLine) return;
//     if (id === '-') gCurrLine--;
//     if (id === '+') gCurrLine++;
//     console.log(gCurrLine)
// }

function getImgs() {
    return gImgs;
}

function setImage(id) {
    gMeme.selectedImgId = id;
}

function setColor(color) {
    gMeme.lines[gCurrLine].color = color;
    console.log(gMeme);
}

function setBorderColor(color) {
    gMeme.lines[gCurrLine].bordercolor = color;
    console.log(gMeme);
}

function changeFontSize(fontChange) {
    if (fontChange === "-") gMeme.lines[gCurrLine].size--
        else gMeme.lines[gCurrLine].size++
}

function deleteLine() {
    gMeme.lines.splice(gCurrLine, 1);
    gCurrLine--;

}

function switchSentences() {
    if (gCurrLine < 0) return;
    if (gCurrLine === gMeme.lines.length - 1) {
        gCurrLine = 0;
    } else {
        gCurrLine++;
    }
    console.log(gCurrLine)
}