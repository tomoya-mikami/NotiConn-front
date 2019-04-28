document.getElementById("submitBtn").onclick = function () {
    const separateStr = ','
    keyStr = localStorage.keyword
    parsedKey = keyStr.split(separateStr)
    parsedKey.push(keyword)
    localStorage.keyword = parsedKey.join(separateStr)
    console.log(localStorage.keyword)
    return
}
function addKeyWord(keyword) {
    const separateStr = ','
    keyStr = localStorage.keyword
    parsedKey = keyStr.split(separateStr)
    parsedKey.push(keyword)
    localStorage.keyword = parsedKey.join(separateStr)
    console.log(localStorage.keyword)
    return
}
