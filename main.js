chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getFont" }, function (
    response
  ) {
    document.getElementById("font-info").innerHTML = response.font;
  });
});
