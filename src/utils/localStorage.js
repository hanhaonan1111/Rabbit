const KEY = 'Rabbit'

export function getStorage() {
    return JSON.parse(localStorage.getItem(KEY))
}


export function setStorage(data) {
    return localStorage.getItem(KEY, JSON.stringify(data))
}


export function hasStorage() {
    return !!localStorage.getItem(KEY)
}

