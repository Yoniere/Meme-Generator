'use strict'


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}


function _saveBooksToReadStorage() {
    saveToStorage(STORAGE_KEY_BOOK, gReadBook)
}