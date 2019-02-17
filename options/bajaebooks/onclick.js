const bookId = document.querySelector("a[data]").attributes.data.value;
const form = new FormData();
form.append("action", "PDOBookLink");
form.append("id", bookId);

fetch("/wp-admin/admin-ajax.php", {
  method: "POST",
  body: form
})
  .then(data => data.ok && data.text())
  .then(data => {
    var a = document.createElement("a");
    var linkText = document.createTextNode("my title text");
    a.appendChild(linkText);
    a.title = "my title text";
    a.href = data;
    a.click();
  });
