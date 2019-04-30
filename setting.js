document.getElementById('submitBtn').onclick = () => {
    const keyword = document.getElementById('additional-keyword').value
    const separateStr = ','
    keyStr = localStorage.keyword
    if (keyStr === undefined) keyStr = ""
    parsedKey = keyStr.split(separateStr)
    parsedKey.push(keyword)
    if (parsedKey[0] === "") parsedKey.shift()
    localStorage.keyword = parsedKey.join(separateStr)
    return
};
