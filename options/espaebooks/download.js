const downloadPageScript = `
let interval = setInterval(() => {
  const btn = document.querySelector("a.btn.btn-default");
  if (btn) {
    btn.click();
    clearInterval(interval);
  }
}, 1000);`;

const addJSCode = code => {
  var yourCustomJavaScriptCode = code;
  var script = document.createElement("script");
  var code = document.createTextNode(
    "(function() {" + yourCustomJavaScriptCode + "})();"
  );
  script.appendChild(code);
  (document.body || document.head).appendChild(script);
};

if (location.origin === "http://mundofile.info") {
  addJSCode(downloadPageScript);
}
