let dark = true;

function toggleMode() {
  if (dark) {
    document.body.style.background = "white";
    document.body.style.color = "black";
    dark = false;
  } else {
    document.body.style.background = "#0f172a";
    document.body.style.color = "white";
    dark = true;
  }
}

function downloadCV() {
  window.open("Resume Garvit Puri .pdf");
}