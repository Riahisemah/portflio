/* SHOW MENU BURGER */

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* ACTIVE AND REMOVE MENU BURGER */

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove Menu on click
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SHOW SCROLL UP */

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* PROGRESS BAR */

const body = document.querySelector("body");
const scrollProgressBar = document.querySelector(".progress_bar");

window.addEventListener("scroll", () => {
  let scrollProgress =
    window.scrollY / (body.clientHeight - window.innerHeight);
  let scrollProgressPercent = Math.round(scrollProgress * 100);
  scrollProgressBar.style.width = scrollProgressPercent + "%";
});

/* SCROLL REVEAL */

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// SCROLL HOME

sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home_img", { delay: 400 });
sr.reveal(".home_social-icon", { interval: 200 });

// SCROLL ABOUT

sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 400 });
sr.reveal(".about_text", { delay: 400 });

// SCROLL SKILLS

sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", {});
sr.reveal(".skills_data", { interval: 200 });
sr.reveal(".skills_img", { delay: 600 });

// SCROLL WORK

sr.reveal(".work_img", { interval: 200 });

//SCROLL CONTACT

sr.reveal(".contact_input", { interval: 200 });
