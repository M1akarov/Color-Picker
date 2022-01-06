const body = document.querySelector("body");
const colorcode = document.getElementById("colorcode");

var colorPicker = new iro.ColorPicker("#picker", {
  width: 200,
  color: "#f00",
});

colorPicker.on("color:change", function (color) {
  body.style.backgroundColor = color.hexString;
  colorcode.innerHTML = color.hexString;
  colorcode.style.color = color.hexString;
});
