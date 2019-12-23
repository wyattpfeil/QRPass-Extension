chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log("Message recieved!")
    navigator.clipboard.readText()
  .then(text => {
    console.log('Pasted content: ', text);
    document.execCommand('paste');
    console.log(document.activeElement)
    var event = new Event('change');
    document.activeElement.value = text
    document.activeElement.dispatchEvent(event);
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
        
    }
});