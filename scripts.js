let timer;

function logout() {
  alert("Sesión cerrada por inactividad.");
  window.location.href = "index.html";
}

document.body.addEventListener("mousemove", resetTimer);
document.body.addEventListener("keypress", resetTimer);

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(logout, 5000);
}
