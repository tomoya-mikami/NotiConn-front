chrome.browserAction.onClicked.addListener(
    () => {
        chrome.tabs.create({ url: './setting.html' })
    }
);

chrome.alarms.create('call', { 'periodInMinutes': 10 })
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'call') {
        // localStorageからqueryを取得する
        const query = getQuery()
        // post qHeader + query
        const res = getResponse()
        const parsedRes = parseResponse(res, query)
        noti(parsedRes)
    }
});

function getQuery(query) {
    return query
}

function parseResponse(response, query) {
    return "hogehoge"
}

function noti() {
    return
}

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
