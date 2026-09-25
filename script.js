document.addEventListener("DOMContentLoaded", function () {

/* =========================
CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}


/* =========================
MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

menuButton.addEventListener("click", function () {

navigation.classList.toggle("open");

if (navigation.classList.contains("open")) {
menuButton.textContent = "✕";
} else {
menuButton.textContent = "☰";
}

});


const navLinks = navigation.querySelectorAll("a");

navLinks.forEach(function (link) {

link.addEventListener("click", function () {
navigation.classList.remove("open");
menuButton.textContent = "☰";
});

});

}


/* =========================
LIGHT / DARK MODE
========================= */

const themeButton = document.getElementById("themeButton");

if (themeButton) {

const savedTheme = localStorage.getItem("sammie-theme");

if (savedTheme === "light") {
document.body.classList.add("light");
themeButton.textContent = "☾";
}


themeButton.addEventListener("click", function () {

document.body.classList.toggle("light");

if (document.body.classList.contains("light")) {

localStorage.setItem("sammie-theme", "light");
themeButton.textContent = "☾";

} else {

localStorage.setItem("sammie-theme", "dark");
themeButton.textContent = "☀";

}

});

}


/* =========================
STAR ANIMATION
========================= */

const starLayer = document.querySelector(".stars-three");

if (starLayer) {

for (let i = 0; i < 70; i++) {

const star = document.createElement("span");

star.style.position = "absolute";
star.style.width = Math.random() * 3 + 1 + "px";
star.style.height = star.style.width;
star.style.borderRadius = "50%";
star.style.background = "white";

star.style.left = Math.random() * 100 + "%";
star.style.top = Math.random() * 100 + "%";

star.style.opacity = Math.random();

star.style.animation =
"twinkle " +
(Math.random() * 3 + 2) +
"s ease-in-out infinite";

star.style.animationDelay =
Math.random() * 4 + "s";

starLayer.appendChild(star);

}

}


/* =========================
SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
".glass-card, .price-card, .project-card, .process-step"
);

const observer = new IntersectionObserver(
function (entries) {

entries.forEach(function (entry) {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

observer.unobserve(entry.target);

}

});

},
{
threshold: 0.1
}
);


revealItems.forEach(function (item) {

item.style.opacity = "0";
item.style.transform = "translateY(25px)";
item.style.transition =
"opacity 0.7s ease, transform 0.7s ease";

observer.observe(item);

});


/* =========================
ORBIT ANIMATION
========================= */

const planetA = document.querySelector(".planet-a");
const planetB = document.querySelector(".planet-b");
const planetC = document.querySelector(".planet-c");

let angle = 0;

function animatePlanets() {

angle += 0.25;

if (planetA) {
planetA.style.transform =
"rotate(" + angle + "deg) translateX(235px) rotate(-" + angle + "deg)";
}

if (planetB) {
planetB.style.transform =
"rotate(" + angle * 0.65 + "deg) translateX(165px) rotate(-" + angle * 0.65 + "deg)";
}

if (planetC) {
planetC.style.transform =
"rotate(" + angle * 1.5 + "deg) translateX(105px) rotate(-" + angle * 1.5 + "deg)";
}

requestAnimationFrame(animatePlanets);

}

animatePlanets();


/* =========================
CONSOLE MESSAGE
========================= */

console.log(
"%c✦ SammieWeb",
"color:#c65cff;font-size:24px;font-weight:bold;"
);

console.log(
"Websites built with code, creativity and a little cosmic energy."
);

});
