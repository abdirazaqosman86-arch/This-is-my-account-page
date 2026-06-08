function hireMe() {
    alert("Thank you for your interest in hiring me! Please contact me using the form below.");
}

function showWelcome() {
    alert("Welcome to Abdirizak Osman Mohamed's Portfolio Website 👋");
}

function sendMessage(event) {
    event.preventDefault();

    alert("✅ Message sent successfully!");

    document.querySelector("form").reset();
}

// Fade-in animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

console.log("Portfolio Website Loaded Successfully 🚀");
