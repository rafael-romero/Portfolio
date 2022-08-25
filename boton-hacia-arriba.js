window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".botonArriba__contenedor").classList.add("show");
  } else {
    document.querySelector(".botonArriba__contenedor").classList.remove("show");
  }
};

document
  .querySelector(".botonArriba__contenedor")
  .addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
