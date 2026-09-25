/* =========================================================
SAMMIE WEB DESIGN — GALAXY WEBSITE
script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

/* =========================================================
CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
LIGHT / DARK MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("sammie-theme");

if (savedTheme === "light") {
document.body.classList.add("light-mode");
}

function updateThemeIcon() {
if (!themeToggle) return;

const isLight = document.body.classList.contains("light-mode");

themeToggle.textContent = isLight ? "☀️" : "🌙";
themeToggle.setAttribute(
"aria-label",
isLight ? "Switch to dark mode" : "Switch to light mode"
);
}

updateThemeIcon();

if (themeToggle) {
themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

const isLight =
document.body.classList.contains("light-mode");

localStorage.setItem(
"sammie-theme",
isLight ? "light" : "dark"
);

updateThemeIcon();
});
}


/* =========================================================
MOBILE NAVIGATION
========================================================= */

const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuButton && navMenu) {

menuButton.addEventListener("click", () => {
navMenu.classList.toggle("active");

const expanded =
navMenu.classList.contains("active");

menuButton.setAttribute(
"aria-expanded",
expanded
);
});

navMenu.querySelectorAll("a").forEach(link => {

link.addEventListener("click", () => {
navMenu.classList.remove("active");
menuButton.setAttribute(
"aria-expanded",
"false"
);
});

});
}


/* =========================================================
SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", event => {

const targetID = link.getAttribute("href");

if (!targetID || targetID === "#") return;

const target = document.querySelector(targetID);

if (!target) return;

event.preventDefault();

target.scrollIntoView({
behavior: "smooth",
block: "start"
});

});

});


/* =========================================================
GALAXY STAR FIELD
========================================================= */

const starContainer =
document.querySelector(".stars");

if (starContainer) {

const starCount =
window.innerWidth < 600 ? 90 : 180;

for (let i = 0; i < starCount; i++) {

const star =
document.createElement("span");

star.classList.add("generated-star");

const size =
Math.random() * 3 + 1;

star.style.width = `${size}px`;
star.style.height = `${size}px`;

star.style.left =
`${Math.random() * 100}%`;

star.style.top =
`${Math.random() * 100}%`;

star.style.animationDelay =
`${Math.random() * 6}s`;

star.style.animationDuration =
`${2 + Math.random() * 5}s`;

starContainer.appendChild(star);
}
}


/* =========================================================
TWINKLING STARS
========================================================= */

const generatedStars =
document.querySelectorAll(".generated-star");

generatedStars.forEach(star => {

star.animate(
[
{
opacity: 0.2,
transform: "scale(0.7)"
},
{
opacity: 1,
transform: "scale(1.3)"
},
{
opacity: 0.2,
transform: "scale(0.7)"
}
],
{
duration:
2000 + Math.random() * 5000,

iterations: Infinity,

delay:
Math.random() * 4000
}
);

});


/* =========================================================
SHOOTING STARS
========================================================= */

function createShootingStar() {

const shootingStar =
document.createElement("div");

shootingStar.className =
"dynamic-shooting-star";

shootingStar.style.top =
`${Math.random() * 55}%`;

shootingStar.style.left =
`${Math.random() * 90}%`;

document.body.appendChild(
shootingStar
);

shootingStar.animate(
[
{
transform:
"translate(0, 0) rotate(-35deg)",
opacity: 0
},

{
transform:
"translate(-80px, 80px) rotate(-35deg)",
opacity: 1
},

{
transform:
"translate(-350px, 350px) rotate(-35deg)",
opacity: 0
}
],
{
duration: 1400,
easing: "ease-out"
}
);

setTimeout(() => {
shootingStar.remove();
}, 1500);
}

setInterval(() => {

if (Math.random() > 0.25) {
createShootingStar();
}

}, 3500);


/* =========================================================
MOUSE / TOUCH PARALLAX
========================================================= */

const galaxyElements =
document.querySelectorAll(
".planet, .hero-planet, .orbit, .moon"
);

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", event => {

mouseX =
(event.clientX / window.innerWidth - 0.5);

mouseY =
(event.clientY / window.innerHeight - 0.5);

galaxyElements.forEach((element, index) => {

const depth =
(index + 1) * 3;

element.style.transform +=
` translate(${mouseX * depth}px, ${mouseY * depth}px)`;

});

});


/* =========================================================
CARD GLOW EFFECT
========================================================= */

const cards =
document.querySelectorAll(
".service-card, .pricing-card, .project-card"
);

cards.forEach(card => {

card.addEventListener("mousemove", event => {

const rect =
card.getBoundingClientRect();

const x =
event.clientX - rect.left;

const y =
event.clientY - rect.top;

card.style.setProperty(
"--mouse-x",
`${x}px`
);

card.style.setProperty(
"--mouse-y",
`${y}px`
);

});

});


/* =========================================================
SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(
".service-card, .pricing-card, .project-card, .process-step, .section-title"
);

const revealObserver =
new IntersectionObserver(
entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add(
"revealed"
);

revealObserver.unobserve(
entry.target
);

}

});

},
{
threshold: 0.12
}
);

revealElements.forEach(element => {

element.classList.add(
"reveal"
);

revealObserver.observe(
element
);

});


/* =========================================================
PRICING CARD HOVER
========================================================= */

const pricingCards =
document.querySelectorAll(
".pricing-card"
);

pricingCards.forEach(card => {

card.addEventListener("mouseenter", () => {

pricingCards.forEach(other => {

if (other !== card) {
other.classList.add(
"pricing-dim"
);
}

});

});

card.addEventListener("mouseleave", () => {

pricingCards.forEach(other => {

other.classList.remove(
"pricing-dim"
);

});

});

});


/* =========================================================
PROJECT CARD TILT
========================================================= */

const projectCards =
document.querySelectorAll(
".project-card"
);

projectCards.forEach(card => {

card.addEventListener(
"mousemove",
event => {

const rect =
card.getBoundingClientRect();

const x =
event.clientX - rect.left;

const y =
event.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / centerY) * -4;

const rotateY =
((x - centerX) / centerX) * 4;

card.style.transform =
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

}
);

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
"";

}
);

});


/* =========================================================
EMAIL CONTACT BUTTONS
========================================================= */

const emailLinks =
document.querySelectorAll(
'a[href^="mailto:"]'
);

emailLinks.forEach(link => {

link.addEventListener("click", () => {

console.log(
"Opening email contact..."
);

});

});


/* =========================================================
PHONE CONTACT
========================================================= */

const phoneLinks =
document.querySelectorAll(
'a[href^="tel:"]'
);

phoneLinks.forEach(link => {

link.addEventListener("click", () => {

console.log(
"Opening phone contact..."
);

});

});


/* =========================================================
ACTIVE NAVIGATION
========================================================= */

const sections =
document.querySelectorAll(
"section[id]"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

const sectionObserver =
new IntersectionObserver(
entries => {

entries.forEach(entry => {

if (!entry.isIntersecting)
return;

const id =
entry.target.getAttribute(
"id"
);

navLinks.forEach(link => {

link.classList.remove(
"active"
);

if (
link.getAttribute("href") ===
`#${id}`
) {

link.classList.add(
"active"
);

}

});

});

},
{
rootMargin:
"-35% 0px -55% 0px"
}
);

sections.forEach(section => {

sectionObserver.observe(
section
);

});


/* =========================================================
BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
document.querySelectorAll(
".btn, button"
);

buttons.forEach(button => {

button.addEventListener(
"click",
function(event) {

const ripple =
document.createElement(
"span"
);

ripple.className =
"ripple";

const rect =
button.getBoundingClientRect();

ripple.style.left =
`${event.clientX - rect.left}px`;

ripple.style.top =
`${event.clientY - rect.top}px`;

button.appendChild(
ripple
);

setTimeout(() => {
ripple.remove();
}, 600);

}
);

});


/* =========================================================
CONSOLE BRANDING
========================================================= */

console.log(
"%c✦ SAMMIE WEB DESIGN ✦",
"font-size: 20px; font-weight: bold; color: #b88cff;"
);

console.log(
"%cBuilding websites that feel out of this world.",
"font-size: 13px; color: #8ed8ff;"
);

});
