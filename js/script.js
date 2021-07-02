"use strict";

const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__Links");
const navLink = document.querySelectorAll(".nav__link");
const navItems = document.querySelectorAll(".nav__Items");
const navItem = document.querySelectorAll(".nav__Items__Item");
const mobile = window.matchMedia("(max-width: 899px)");
const itemLinks = document.querySelectorAll(".item__links");

let show = false;

const toggle = function (e) {
  e.preventDefault();

  if (!show) {
    burger.classList.add("active");
    navLinks.classList.add("active");

    show = true;
  } else {
    burger.classList.remove("active");
    navLinks.classList.remove("active");

    show = false;
  }

  if (mobile.matches) {
    itemLinks.forEach((link) => {
      // console.log(link);
      link.querySelector("img").src = "./images/icon-arrow-dark.svg";
    });
  }
};

burger.addEventListener("click", toggle);

navItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    item.lastElementChild.classList.toggle("active");

    itemLinks.forEach((link) => {
      console.log(link.lastElementChild);
      link.lastElementChild.style.transform = "rotate(180deg)";
    });
  });
});
