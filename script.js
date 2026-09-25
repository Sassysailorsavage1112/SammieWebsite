/* =========================================================
SAMMIE WEB DESIGN
GALAXY WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

/* =====================================================
YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}


/* =====================================================
MOBILE MENU
===================================================== */

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.getElementById("navMenu");

if (menuToggle && navMenu) {

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("open");

const isOpen =
navMenu.classList.contains("open");

menuToggle.textContent =
isOpen ? "✕" : "☰";

});


navMenu.querySelectorAll("a").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("open");

menuToggle.textContent = "☰";

});

});

}


/* =====================================================
DARK / LIGHT MODE
===================================================== */

const themeToggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("sammie-theme");

if (savedTheme === "light") {

document.body.classList.add("light-mode");

if (themeToggle) {
themeToggle.textContent = "☀";
}

}


if (themeToggle) {

themeToggle.addEventListener("click", () => {

document.body.classList.toggle(
"light-mode"
);

const isLight =
document.body.classList.contains(
"light-mode"
);

localStorage.setItem(
"sammie-theme",
isLight ? "light" : "dark"
);

themeToggle.textContent =
isLight ? "☀" : "☾";

});

}


/* =====================================================
SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
'a[href^="#"]'
).forEach(link => {

link.addEventListener("click", event => {

const targetID =
link.getAttribute("href");

if (
!targetID ||
targetID === "#"
) {
return;
}

const target =
document.querySelector(targetID);

if (!target) {
return;
}

event.preventDefault();

target.scrollIntoView({
behavior: "smooth",
block: "start"
});

});

});


/* =====================================================
RANDOM STAR GENERATOR
===================================================== */

const space =
document.querySelector(".space");

if (space) {

const starLayer =
document.createElement("div");

starLayer.className =
"generated-stars";

space.appendChild(starLayer);


const starCount =
window.innerWidth < 600
? 90
: 180;


for (
let i = 0;
i < starCount;
i++
) {

const star =
document.createElement("span");

star.className =
"generated-star";


const size =
Math.random() * 2.5 + 0.5;


star.style.width =
`${size}px`;

star.style.height =
`${size}px`;


star.style.left =
`${Math.random() * 100}%`;

star.style.top =
`${Math.random() * 100}%`;


star.style.animationDuration =
`${2 + Math.random() * 5}s`;


star.style.animationDelay =
`${Math.random() * 5}s`;


starLayer.appendChild(star);

}

}


/* =====================================================
EXTRA SHOOTING STARS
===================================================== */

function createShootingStar() {

const star =
document.createElement("div");

star.className =
"dynamic-shooting-star";


star.style.top =
`${Math.random() * 65}%`;

star.style.left =
`${60 + Math.random() * 35}%`;


document.body.appendChild(star);


star.animate(
[
{
opacity: 0,
transform:
"translate(0,0) rotate(-35deg)"
},

{
opacity: 1,
transform:
"translate(-80px,80px) rotate(-35deg)"
},

{
opacity: 0,
transform:
"translate(-350px,350px) rotate(-35deg)"
}
],
{
duration: 1400,
easing: "ease-out"
}
);


setTimeout(() => {

star.remove();

}, 1500);

}


setInterval(() => {

createShootingStar();

}, 4500);


/* =====================================================
MOUSE PARALLAX
===================================================== */

const planets =
document.querySelectorAll(
".planet, .hero-planet, .orbit"
);


window.addEventListener(
"mousemove",
event => {

const x =
event.clientX /
window.innerWidth -
0.5;

const y =
event.clientY /
window.innerHeight -
0.5;


planets.forEach(
(planet, index) => {

const movement =
(index + 1) * 4;


if (
planet.classList.contains(
"orbit"
)
) {

return;

}


planet.style.marginLeft =
`${x * movement}px`;

planet.style.marginTop =
`${y * movement}px`;

}
);

}
);


/* =====================================================
CARD GLOW
===================================================== */

const cards =
document.querySelectorAll(
".glass-card, .pricing-card, .project-card"
);


cards.forEach(card => {

card.addEventListener(
"mousemove",
event => {

const rect =
card.getBoundingClientRect();


const x =
event.clientX -
rect.left;


const y =
event.clientY -
rect.top;


card.style.setProperty(
"--mouse-x",
`${x}px`
);


card.style.setProperty(
"--mouse-y",
`${y}px`
);

}
);

});


/* =====================================================
SCROLL REVEAL
===================================================== */

const revealItems =
document.querySelectorAll(
".service-card, .pricing-card, .project-card, .process-step"
);


const observer =
new IntersectionObserver(
entries => {

entries.forEach(entry => {

if (
entry.isIntersecting
) {

entry.target.classList.add(
"visible"
);

observer.unobserve(
entry.target
);

}

});

},
{
threshold: 0.12
}
);


revealItems.forEach(item => {

item.classList.add(
"reveal-item"
);

observer.observe(item);

});


/* =====================================================
PROJECT CARD TILT
===================================================== */

const projectCards =
document.querySelectorAll(
".project-card"
);


projectCards.forEach(card => {

card.addEventListener(
"mousemove",
event => {

if (
window.innerWidth < 800
) {
return;
}


const rect =
card.getBoundingClientRect();


const x =
event.clientX -
rect.left;


const y =
event.clientY -
rect.top;


const centerX =
rect.width / 2;


const centerY =
rect.height / 2;


const rotateX =
((y - centerY) /
centerY) *
-3;


const rotateY =
((x - centerX) /
centerX) *
3;


card.style.transform =
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

}
);


card.addEventListener(
"mouseleave",
() => {

card.style.transform = "";

}
);

});


/* =====================================================
CONSOLE
===================================================== */

console.log(
"✦ SammieWeb Galaxy loaded successfully."
);

});
