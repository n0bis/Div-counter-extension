function setDOMInfo(info) {
  console.log(info)
  document.getElementById('counter').textContent = info.divs
}

window.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        setDOMInfo)
  })
})