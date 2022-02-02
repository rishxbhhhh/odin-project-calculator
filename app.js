let screen = document.querySelector(".screen");
btn = document.querySelectorAll(".grid-item");
let screenValue = screen.value;
screen.focus();
screen.addEventListener("keypress",(e)=>{
  // let name = e.key;
  let code = e.code;
  if (code == "NumpadEnter" || code == "Enter") {
    screenValue = screen.value;
    screenValue = eval(screenValue);
    if(screenValue.length>20){
      screenValue = toExponential(screenValue);
    }
    screen.value = screenValue;
  }
});
for (item of btn) {
  item.addEventListener("click", function (e) {
    btnText = e.target.innerHTML;
    if ((btnText == ".")) {
      if (screenValue.includes(".") === false) {
        screenValue += btnText;
        screen.value = screenValue;
      }
    } else if (btnText == "x") {
      btnText = "*";
      screenValue += btnText;
      screen.value = screenValue;
    } else if (btnText == "=") {
      screenValue = eval(screenValue);
      if(screenValue.length>20){
        screenValue = toExponential(screenValue);
      }
      screen.value = screenValue;
    } else if (btnText == "C") {
      screen.value = "";
      screenValue = "";
    } else if (btnText == "Del") {
      screenValue = String(screenValue).slice(0, -1);
      screen.value = screenValue;
    } else if (btnText == "+/-") {
      screenValue = eval(screenValue) * -1;
      screen.value = screenValue;
    } else if (btnText == "%") {
      screen.value = eval(screenValue) / 100;
      screenValue = "";
    } else {
      screenValue += btnText;
      screen.value = screenValue;
    }
  });
}
