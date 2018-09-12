chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
})

chrome.runtime.onMessage.addListener(
  function (message, sender, response) {
    if ((message.from === 'popup') && (message.subject === 'DOMInfo')) {
      var domInfo = {
        divs: document.querySelectorAll('div').length
      }
      response(domInfo)
    }
})