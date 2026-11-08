console.log("Site loaded");

function toggleMenu() {
    const hamburger = document.querySelector(".hamburger-button");
    const navLinks = document.querySelector(".nav-links");

    hamburger.classList.toggle("is-active");
    navLinks.classList.toggle("is-active");
}
