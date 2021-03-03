const panelsRef = document.querySelectorAll(".panel");

panelsRef.forEach((panel) => {
  if (panel.classList.contains("open")) panel.classList.remove("open");
  panel.addEventListener("click", toggleOpen);
});

function toggleOpen() {
  isOpen();
  this.classList.toggle("open");
}

function isOpen() {
  panelsRef.forEach((panel) => {
    if (panel.classList.contains("open")) panel.classList.remove("open");
  });
}
