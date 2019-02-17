// On click icon, download
chrome.browserAction.onClicked.addListener(function(tab) {
  const { url } = tab;
  let file = "";
  if (url.includes("espaebook2.com")) file = "options/espaebooks/onclick.js";
  if (url.includes("bajaebooks2.net")) file = "options/bajaebooks/onclick.js";
  if (url.includes("bajaepub.com")) file = "options/bajaepub/onclick.js";

  chrome.tabs.executeScript({ file });
});
