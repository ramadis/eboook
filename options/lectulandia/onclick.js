const decodeBase64 = atob;

const downloadLinkSelector = "#downloadContainer > a:nth-child(1)";
const urlIdSeparatorRegex = /d=|%3D/;

const downloadLinkElement = document.querySelector(downloadLinkSelector);
const [, bookIdEncoded] = downloadLinkElement.href.split(urlIdSeparatorRegex);
const bookId = decodeBase64(bookIdEncoded);

var a = document.createElement("a");
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = `http://www.beeupload.net/file/${bookId}/`;
a.click();
