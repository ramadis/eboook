// disables active tab
const disableActiveTab = () =>
  chrome.tabs.query({ currentWindow: true, active: true }, ([tab]) =>
    chrome.browserAction.disable(tab.id)
  );

const enableActiveTab = () =>
  chrome.tabs.query({ currentWindow: true, active: true }, ([tab]) =>
    chrome.browserAction.enable(tab.id)
  );

// get script's file path for a given url
const getScriptFromUrl = url => {
  let file = "";
  if (url.includes("espaebook2.com")) file = "options/espaebooks/onclick.js";
  else if (url.includes("bajaebooks2.net"))
    file = "options/bajaebooks/onclick.js";
  else if (url.includes("bajaepub.com")) file = "options/bajaepub/onclick.js";
  else if (url.includes("epublibre.org")) file = "options/epublibre/onclick.js";
  else if (url.includes("lectulandia.com"))
    file = "options/lectulandia/onclick.js";
  return file;
};

// enable extensions only in included websites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, { url }) => {
  if (!url) return;
  else if (!getScriptFromUrl(url)) disableActiveTab();
  else enableActiveTab();
});

// on click, triggers download script
chrome.browserAction.onClicked.addListener(tab => {
  const { url } = tab;
  const file = getScriptFromUrl(url);
  chrome.tabs.executeScript({ file });
});
