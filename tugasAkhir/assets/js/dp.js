const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const caret = document.querySelector(".caret");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".menu li");
  const selected = document.querySelector(".selected");

  select.addEventListener("click", function () {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", function () {
      //selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      //   options.forEach((option) => {
      //     option.classList.add("active");
      //   });

      //   option.classList.add("active");
    });
  });
});

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
