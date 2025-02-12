// Add interactivity
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".cta-btn");
    btn.addEventListener("click", function () {
        alert("Welcome to Xionova! 🚀");
    });
});

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
