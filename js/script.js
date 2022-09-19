const element = document.getElementById("current-year");
if (element) {
  element.innerText = new Date().getFullYear();
}
