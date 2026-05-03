const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const closeButton = lightbox?.querySelector(".close-lightbox");

document.querySelectorAll(".image-button[data-full]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    const imagePath = button.getAttribute("data-full");
    const sourceImage = button.querySelector("img");
    lightboxImage.src = imagePath;
    lightboxImage.alt = sourceImage?.alt || "Project image preview";
    lightbox.showModal();
  });
});

closeButton?.addEventListener("click", () => lightbox.close());

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.open) {
    lightbox.close();
  }
});
