// button
const button = document.querySelector(".button");
const btn = document.querySelectorAll(".btn");

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "#09274e";
  button.style.border = "2px #09274e solid";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#04152b";
});

btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "#ee7387";
  btn.style.border = "2px #ee7387 solid";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "#e43f5a";
});
