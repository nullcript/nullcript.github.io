"use strict";

window.addEventListener("load", function () {
    const preloader = document.getElementById('preloader');
    const website = document.getElementById('website');
    setTimeout(() => {
        preloader.style.cssText = "display:none";
        website.style.display = "block";
    }, 500);
});
