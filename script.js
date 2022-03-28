const nav = document.querySelector('nav');
const logoImage = document.getElementById('image');
const navLink1 = document.getElementById("nav-link1");
const navLink2 = document.getElementById("nav-link2");
const navLink3 = document.getElementById("nav-link3");
const navLink4 = document.getElementById("nav-link4");
const navLink5 = document.getElementById("nav-link5");
const menuIcon = document.getElementById('bi-menu-button-wide')
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-white", "shadow");
        logoImage.src = "logo-black.png";
        navLink1.classList.add('active');
        navLink2.classList.add('active');
        navLink3.classList.add('active');
        navLink4.classList.add('active');
        navLink5.classList.add('active');
    } else {
        nav.classList.remove("bg-white", "shadow")
        logoImage.src = "logo-white.png";
        navLink1.classList.remove('active');
        navLink2.classList.remove('active');
        navLink3.classList.remove('active');
        navLink4.classList.remove('active');
        navLink5.classList.remove('active');

    }
});