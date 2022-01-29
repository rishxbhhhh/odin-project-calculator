let screen = document.querySelector(".screen");
btn = document.querySelectorAll(".grid-item");
let screenValue = "";
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
      screen.value = screenValue;
    } else if (btnText == "C") {
      screen.value = "";
      screenValue = "";
    } else if (btnText == "Del") {
      screenValue = screenValue.slice(0, -1);
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
