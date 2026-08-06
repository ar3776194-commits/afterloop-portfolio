// ==========================
// AFTERLOOP
// Designed & Developed by darkai
// ==========================
if (window.location.hash === "#debug") {
    alert("Debug mode detected");

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/eruda";

    script.onload = () => {
        alert("Eruda loaded");
        eruda.init();
    };

    script.onerror = () => {
        alert("Eruda failed to load");
    };

    document.head.appendChild(script);
}
// Dynamic Copyright Year

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ==========================
// Future Features
// ==========================

// Navigation
function toggleMenu(){
document.getElementById("navMenu").classList.toggle("show");
}
// Theme Toggle

// Back To Top

// Animations

// Contact Form

// Loading Screen
