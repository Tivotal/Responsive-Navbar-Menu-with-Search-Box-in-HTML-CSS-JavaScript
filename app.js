/* Created by Ticotal */

let menuIcon = document.querySelector(".menu-icon span");
let navBar = document.querySelector(".nav-items");
let searchIcon = document.querySelector(".search-icon");
let cancelIcon = document.querySelector(".cancel-icon");
let searchForm = document.querySelector("form");

menuIcon.addEventListener("click", () => {
  navBar.classList.add("active");
  menuIcon.classList.add("hide");
  searchIcon.classList.add("hide");
  cancelIcon.classList.add("show");
});

cancelIcon.addEventListener("click", () => {
  searchForm.classList.remove("active");
  navBar.classList.remove("active");
  searchIcon.classList.remove("hide");
  cancelIcon.classList.remove("show");
  menuIcon.classList.remove("hide");
});

searchIcon.addEventListener("click", () => {
  searchForm.classList.add("active");
  cancelIcon.classList.add("show");
  searchIcon.classList.add("hide");
});
