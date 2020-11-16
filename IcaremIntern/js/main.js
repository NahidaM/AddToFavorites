let myBtns = document.querySelectorAll(".links");

myBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      document.querySelector(".show").classList.remove("show");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(this.dataset.targetSection).classList.add("show");
      this.classList.add("active");
    }
  });
}); 