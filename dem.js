document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navd = document.querySelector(".navd");

    hamburger.addEventListener("click", function() {
        navd.classList.toggle("active");
    });
});
