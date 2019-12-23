window.onload = function() {
    console.log("Hello world!")
    function waitForText(element, text, callback, freq) {
        if (!element || !callback || typeof text !== 'string')
            throw new TypeError('Bad value');
        var interval = window.setInterval(test, freq || 200);
        function test() {
            if (!element.parentNode) // node detached, don't hold onto this
                window.clearInterval(interval);
            if (element.textContent === text) {
                window.clearInterval(interval);
                callback.call(element);
            }
        }
    }
    var elm = document.querySelector("#TopText")
    waitForText(elm, "Copied password!", function(elem){
        window.close()
        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
            console.log(response.farewell);
          });
    })
}