let change_color_btn = document.querySelector(".change_color_btn");
let copy_color_btn = document.querySelector(".copy_color_btn");
let color_code = document.querySelector(".color_code");
let copied_text = document.querySelector(".copied_text");

function randomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}
change_color_btn.addEventListener("click", function () {
  let hexCode = randomColor();
  document.body.style.backgroundColor = `#${hexCode}`;
  color_code.textContent = `#${hexCode}`;
  copied_text.classList.add("hidden");
});
copy_color_btn.addEventListener("click", function () {
  let copyHexCode = color_code.textContent;
  navigator.clipboard.writeText(copyHexCode).then(() => {
    copied_text.classList.remove("hidden");
    setTimeout(() => {
      copied_text.classList.add("hidden");
    }, 2000);
  });
});
