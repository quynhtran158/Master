$(".counter").countUp();
/* Darkmode */
function toggleDarkmode() {
  let html = document.getElementsByTagName("switchButton")[0];
  let mode = html.getAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", mode == "dark" ? "white" : "dark");
}
