// On click icon, download
chrome.browserAction.onClicked.addListener(function(tab) {
  const { url } = tab;
  let file = "";
  if (url.includes("espaebook2.com")) file = "options/espaebooks/onclick.js";
  else if (url.includes("bajaebooks2.net"))
    file = "options/bajaebooks/onclick.js";
  else if (url.includes("bajaepub.com")) file = "options/bajaepub/onclick.js";
  else if (url.includes("epublibre.org")) file = "options/epublibre/onclick.js";
  else if (url.includes("lectulandia.com"))
    file = "options/lectulandia/onclick.js";

  chrome.tabs.executeScript({ file });
});
