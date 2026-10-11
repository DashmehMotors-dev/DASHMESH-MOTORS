const galleryImages = document.querySelectorAll("#gallery img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    window.open(image.src, "_blank", "noopener");
  });
});