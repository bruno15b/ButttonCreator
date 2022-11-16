const controles = document.forms.buttonCreator;
const btn = document.querySelector(".button");
const codigo = document.querySelector(".css");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
  texto(value) {
    btn.innerText = value;
  },
};

function handleChange(event) {
  const target = event.target;
  handleStyle[target.name](target.value);
  showCss();

  function showCss() {
    codigo.innerHTML =
      "<span>" +
      "button{ <br>" +
      btn.style.cssText.split("; ").join(";</span><span>") +
      "<br>}";
  }
}
