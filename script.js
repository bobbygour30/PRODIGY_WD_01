document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("main-nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#0082B2"; // Change background color on scroll
        } else {
            nav.style.backgroundColor = "#FF4A4A";
        }
    });
});