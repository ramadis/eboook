// On click icon, download
chrome.browserAction.onClicked.addListener(function(tab) {
  const { url } = tab;
  console.log(url);
  let file = "";
  if (url.includes("espaebook2.com")) file = "options/espaebooks/onclick.js";
  if (url.includes("bajaebooks2.net")) file = "options/bajaebooks/onclick.js";

  chrome.tabs.executeScript({ file });
});
