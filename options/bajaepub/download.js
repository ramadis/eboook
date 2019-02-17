let interval = setInterval(() => {
  const btn = document.querySelector("a.btn.btn-default");
  if (btn) {
    btn.click();
    clearInterval(interval);
  }
}, 1000);
