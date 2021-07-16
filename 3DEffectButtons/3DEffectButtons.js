[...document.querySelectorAll(".button")].forEach((button) => {
    button.addEventListener("click", () => button.classList.toggle("clicked"));
});