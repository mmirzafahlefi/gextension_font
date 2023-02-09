chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "getFont") {
    var font = window
      .getComputedStyle(document.body, null)
      .getPropertyValue("font-family");
    sendResponse({ font: font });
  }
});
