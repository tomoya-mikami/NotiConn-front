const qHeader = "https://connpass.com/api/v1/event/?"
chrome.browserAction.onClicked.addListener(
    () => {
        chrome.tabs.create({ url: './setting.html' });
    }
);

chrome.alarms.create('call', { 'periodInMinutes': 10 });
chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'call') {
        // localStorageからqueryを取得する
        const query = getQuery();
        // post qHeader + query
        const parsedRes = parseResponse()
        noti(parsedRes)
    }
});


function getQuery() {
    return "hoge"
}

function parseResponse() {
    return "hogehoge"
}
