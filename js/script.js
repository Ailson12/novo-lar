const element = document.getElementById("current-year");
if (element) {
  element.innerText = new Date().getFullYear();
}

const cleanItemsActive = (elements, elementActive) => {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
  elementActive.classList.add("active");
};

const imageActive = document.querySelector(".gallery .image-active img");

const gallery = () => {
  const imagesThumbnail = document.querySelectorAll(
    ".gallery .image-options img"
  );

  imagesThumbnail.forEach((image) => {
    image.addEventListener("click", () => {
      if (imageActive) {
        cleanItemsActive(imagesThumbnail, image);

        const path = image.getAttribute("src");
        imageActive.setAttribute("src", path.replace("-p", ""));
      }
    });
  });
};

const mobileGallery = () => {
  const navigationButtons = document.querySelectorAll(
    ".gallery .mobile-options button"
  );

  navigationButtons.forEach((navigation) => {
    navigation.addEventListener("click", () => {
      if (imageActive) {
        cleanItemsActive(navigationButtons, navigation);
        imageActive.setAttribute("src", navigation.dataset?.src);
      }
    });
  });
};

gallery();
mobileGallery();
