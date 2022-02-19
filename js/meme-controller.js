'use strict'
var gImg;
var gCanvas;
var gCtx;
var gStartPos;
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function renderMeme() {
    var meme = getMeme()
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    // resizeCanvas()
    drawImg(meme.selectedImgId);
    if (meme.lines.length === 0) return;
    meme.lines.forEach(line => {
        drawText(line.txt, line.canvaslocationx, line.canvaslocationy, line.size, line.color, line.bordercolor)
    });

    // addListeners()

}

function onSetLineTxt() {
    var elTxt = document.querySelector('.input-text').value;
    if (!elTxt) return;
    console.log(elTxt)
    setLineTxt(elTxt)
    document.querySelector('.input-text').value = '';
    renderMeme()
}

function onSetColor(color) {
    setColor(color);
    renderMeme();
}

function onSetBorderColor(color) {
    var bordercolor = color
    console.log(bordercolor)
    setBorderColor(bordercolor);
    renderMeme();
}

function onChangeFontSize(size) {
    changeFontSize(size)
    renderMeme()
}

function onSwitchSentences() {
    switchSentences()
    renderMeme()
}

function onDeleteLine() {
    deleteLine();
    renderMeme()
}


function drawImg(id) {
    var elImg = document.getElementById(id);
    // Naive approach:
    // there is a risk that image is not loaded yet and nothing will be drawn on canvas
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}

function drawText(text, x, y, fontSize, color, bordercolor) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = bordercolor;
    gCtx.fillStyle = color;
    gCtx.font = `${fontSize}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onChangeLine(id) {
    changeLine(id);
    renderMeme();
}

function onChangeLineLocation(location) {
    changeLineLocation(location)
    renderMeme()
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container2').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function(event) {
        console.log('onload');
        var img = new Image()
            // Render on canvas
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImg = img
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

function onSaveToMyMemes() {
    saveToMyMemes()
}

function openMemesGallery() {
    if (document.querySelector('.meme-gallery').style.display !== 'none') {
        return;
    }
    resetgMeme()
    document.querySelector('.meme-editor').style.display = 'none'
    renderGallery()
    document.querySelector('.meme-gallery').style.display = 'block'
}

function onSetLineEmoji(id) {
    setLineEmoji(id)
    renderMeme()
}

function uploadImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
            // console.log(encodedUploadedImgUrl);
            // document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(imgDataUrl, onSuccess);
}

// function onRotateLine(id) {
//     var meme = getMeme()
//     var line = meme.lines[gMeme.selectedLineIdx]
//     drawText(line.txt, line.canvaslocationx, line.canvaslocationy, line.size, line.color, line.bordercolor)
//         // renderMeme()
//     gCtx.rotate(+id * Math.PI / 180);

// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     console.log('onDown()');
//     if (!isLineClicked(pos)) return
//     setLineDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'

// }

// function onMove(ev) {
//     console.log('onMove()');
//     const meme = getMeme();
//     if (meme.isDrag) {
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y
//         moveLine(dx, dy)
//         gStartPos = pos
//         renderCanvas()
//     }
// }

// function onUp() {
//     console.log('onUp()');
//     setLineDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
//         }
//     }
//     return pos
// }

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {
//         resizeCanvas()
//         renderCanvas()
//     })
// }

// function addMouseListeners() {
//     gCanvas.addEventListener('mousemove', onMove)
//     gCanvas.addEventListener('mousedown', onDown)
//     gCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gCanvas.addEventListener('touchmove', onMove)
//     gCanvas.addEventListener('touchstart', onDown)
//     gCanvas.addEventListener('touchend', onUp)
// }

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }

// function renderCanvas() {
//     gCtx.save()
//     gCtx.fillStyle = "#ede5ff"
//     gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
//     console.log('idid')
//     renderLine()
//     gCtx.restore()
// }

// function renderLine() {
//     // const { pos, color, size } = getCircle()
//     var meme = getMeme();
//     var line = meme.lines[selectedLineIdx];
//     const { txt, pos, size, color, bordercolor } = line
//     console.log(line)
//         // drawArc(pos.x, pos.y, size, color)
//     drawText(txt, pos.x, pos.y, size, color, bordercolor)
// }