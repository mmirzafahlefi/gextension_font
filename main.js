chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getFont" }, function (
    response
  ) {
    document.getElementById("font-info").innerHTML = response.font;
    document.getElementById("download-button").disabled = false;
    document.getElementById("download-button").addEventListener("click", function () {
      chrome.tabs.create({ url: "https://www.google.com/search?q=" + response.font + " download" });
    });
  });
});
