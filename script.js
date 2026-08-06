// ==========================
// AFTERLOOP
// Designed & Developed by darkai
// ==========================
// Load Eruda only when URL ends with #debug
if (window.location.hash === "#debug") {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  script.onload = () => {
    eruda.init();
    console.log("Eruda Debug Mode Enabled");
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
