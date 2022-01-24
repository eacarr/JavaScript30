const inputs = document.querySelectorAll(".controls input");
//allows us to loop thrugh the imputs

function handleUpdate() {
  //The this value in these dataset methods reference the global
  // object.Since you want the this value inside the methods,
  // you need to use the regular functions instead:
  const suffix = this.dataset.sizing || "";
  // suffix for the data attribute of the inputs
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
