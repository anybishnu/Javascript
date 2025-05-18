console.log("song download progressbar");

let btn = document.querySelector(".btn");
let bar_in = document.querySelector(".bar_in");
let percentage = document.querySelector(".percentage");
let button = document.querySelector("button");

let count = 0;
btn.addEventListener("click", function () {
  let randomTime = Math.floor(Math.random() * 500);
  console.log(randomTime);
  console.log(randomTime)

  let interval = setInterval(() => {
    if (count < 100) {
      count += 1;
      bar_in.style.width = count + `%`;
      percentage.textContent = count + "%";
      button.textContent = "Downloding...";
      button.style.opacity = 0.7;
    }
    if (count == 100) {
      button.textContent = "Done!";
      button.style.opacity = 1;
      clearInterval(interval);
    }
  }, randomTime);
});
