const element = document.getElementById("current-year");
if (element) {
  element.innerText = new Date().getFullYear();
}

const imagesThumbnail = document.querySelectorAll(
  ".gallery .image-options img"
);
const imageActive = document.querySelector(".gallery .image-active img");

const cleanActiveThumbnails = () => {
  imagesThumbnail.forEach((image) => {
    image.classList.remove("active");
  });
};

imagesThumbnail.forEach((image) => {
  image.addEventListener("click", ({ target }) => {
    if (imageActive) {
      cleanActiveThumbnails();
      image.classList.add("active");

      const path = target.getAttribute("src");
      imageActive.setAttribute("src", path.replace("-p", ""));
    }
  });
});
