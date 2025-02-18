function scrollToSection() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}
function scrollToPricing() {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
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