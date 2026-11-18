
/* =========================
   AMIRUL PORTFOLIO
   STEP 04 - ANIMATIONS
========================= */

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

    // 1. Page Load Animation
    document.body.classList.add("page-loaded");


    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".section, .hero-tag, .hero h1, .hero h2, .hero-description, .hero-button"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    // 3. Skills Animation
    const skills = document.querySelectorAll(
        ".skills-container span"
    );

    skills.forEach((skill, index) => {

        skill.style.transitionDelay = `${index * 100}ms`;
        skill.classList.add("skill-reveal");

        observer.observe(skill);

    });


    // 4. Navbar Scroll Effect
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    // 5. Current Year in Footer
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} Amirul Islam. All Rights Reserved.`;
    }

});
