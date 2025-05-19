let btn = document.querySelector(".btn");
let imgArr = [
  {
    src: "images/bheem.png",
  },
  {
    src: "images/chutki.png",
  },
  {
    src: "images/dbholu.png",
  },
  {
    src: "images/indravarma.png",
  },
  {
    src: "images/indumoti.png",
  },
  {
    src: "images/jaggu.png",
  },
  {
    src: "images/kaliya.png",
  },
  {
    src: "images/raju.png",
  },
];

btn.addEventListener("click", function (dets) {
  let x = Math.random() * 90;
  let y = Math.random() * 80;
  let rot = Math.random() * 360;

  let randomImg = Math.floor(Math.random() * imgArr.length);
  let getImg = imgArr[randomImg];
  let getsrc = getImg.src;

  let img = document.createElement("img");
  img.setAttribute("src", getsrc);
  img.style.width = "100px";
  img.style.position = "absolute";
  img.style.top = y + "%";
  img.style.left = x + "%";
  img.style.rotate = rot + "deg";
  document.body.appendChild(img);
  console.log(dets.offsetX);
});
