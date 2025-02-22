function scrollToSection() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}
function scrollToPricing() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
}
function scrollToPricing0() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(0);
}
function scrollToPricing1() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(1);
}
function scrollToPricing2() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(2);
}
function scrollToPricing3() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(3);
}
function scrollToPricing4() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(4);
}
function scrollToPricing5() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
    showPricing(5);
}

//Pricing section
function showPricing(index) {
    // Hide all pricing containers
    document.querySelectorAll('.pricing-container').forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected pricing container
    const selectedContainer = document.getElementById(`pricing-${index}`);
    selectedContainer.classList.add('active');

    // Toggle active button style
    document.querySelectorAll('.buttons button').forEach((btn) => {
        btn.classList.remove('active-btn');
    });
    document.getElementById(`btn-${index}`).classList.add('active-btn');
}

showPricing(0);

const backToTopButton = document.getElementById("backToTop");

// Show the button when user scrolls down
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
