const allPanels = document.querySelectorAll(".panel");

// function to toggle the open class
// can not be arrow function since calling this.
function toggleOpen() {
  this.classList.toggle("open");
}
// function to toggle the open-active class
// can not be arrow function since calling this.
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

allPanels.forEach((panel) => panel.addEventListener("click", toggleOpen));
allPanels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
