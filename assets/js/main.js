const navBarBtn = document.querySelector(".navbar__icon"),
  navHolder = document.querySelector(".nav__holder"),
  navItems = document.querySelectorAll(".nav__item"),
  visibleClass = "visible",
  navIcon = document.querySelector(".nav__bar-icon");

function closeAll() {
  navHolder.classList.remove(visibleClass);
  navIcon.className = "fa-solid fa-bars nav__bar-icon";
}

function revealBar() {
  if (navHolder.classList.contains(visibleClass)) {
    navHolder.classList.remove(visibleClass);
    navIcon.className = "fa-solid fa-bars nav__bar-icon";
  } else {
    navHolder.classList.add(visibleClass);
    navIcon.className = "fa-solid fa-times nav__bar-icon";
  }
}

navBarBtn.addEventListener("click", revealBar);

navItems.forEach((btn) => {
  btn.addEventListener("click", closeAll);
});

const scrollVar = "scroll__top-visble",
  scrollBtn = document.querySelector(".scroll__top");

function scrollVisivle() {
  if (scrollY >= 300) {
    scrollBtn.classList.add(scrollVar);
  } else {
    scrollBtn.classList.remove(scrollVar);
  }
}

window.addEventListener("scroll", scrollVisivle);

let swiperPortfolio = new Swiper(".testimonials__container", {
  cssMode: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// Modal

const modal = document.querySelector(".msg__background"),
  hideClass = "hidden",
  orderBtn = document.querySelector(".order__button"),
  closeBtn = document.querySelector(".close--btn");

orderBtn.addEventListener("click", function () {
  modal.classList.remove(hideClass);
});

closeBtn.addEventListener("click", function () {
  modal.classList.add(hideClass);
});
