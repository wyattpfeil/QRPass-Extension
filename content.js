chrome.browserAction.onClicked.addListener(function(activeTab) {
  //var window = window.open("https://wyattpfeil.com/QRPassword", "window");
});
var focusedElem = null
chrome.commands.onCommand.addListener(function(command) {
  if (command === "QRPass") {
    window1 = chrome.windows.create(
      { url: "https://wyattpfeil.com/QRPassword" },
      function(tab) {
        console.log(tab);
        //tab.onClosed().addListener(function(){console.log("Window closed!")})
      }
    );
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "hello") {
      setTimeout(() => {
        chrome.tabs.getSelected(null, function(tab) {
            myURL = tab.url;
            chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, function(Dom){});
          });
      }, 1000);
    
  }
});
