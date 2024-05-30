const indicators = document.querySelector(".indicators");
const showImg = document.querySelector("#show img");

indicators.addEventListener("click", (e) => {
  let imgUrl = e.target.src;
  imgUrl && (showImg.src = imgUrl);
});