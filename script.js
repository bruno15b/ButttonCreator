const controles = document.forms.buttonCreator;
const btn = document.querySelector(".button");
const codigo = document.querySelector(".css");
const radios = document.querySelectorAll('[type="radio"]');
const hover = document.querySelector(".hover-color");
controles.addEventListener("change", handleChange);

function handleChange(event) {
  const target = event.target;
  if (
    target.name != "height" &&
    target.name != "width" &&
    target.name != "borderRadius" &&
    target.name != "fontSize" &&
    target.name != "texto" &&
    target.name != "boxShadow"
  ) {
    btn.style[target.name] = target.value;
  } else if (target.name == "texto") {
    btn.innerText = target.value;
  } else {
    btn.style[target.name] = target.value + "px";
  }

  showCss();

  function showCss() {
    codigo.innerHTML =
      "<span>" +
      "button{ <br>" +
      btn.style.cssText.split("; ").join(";</span><span>") +
      "<br>}";
  }
}
