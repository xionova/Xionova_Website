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
const music = document.getElementById("mute-btn");

// Show the button when user scrolls down
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
        music.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
        music.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

let player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '0',
                width: '0',
                videoId: 'PpJQZH9B1Y4', 
                playerVars: {
                    autoplay: 1,  // Autoplay enabled
                    loop: 1,
                    playlist: 'PpJQZH9B1Y4', // Required for looping
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    mute: 1 // Start muted to bypass autoplay restrictions
                },
                events: {
                    onReady: function (event) {
                        event.target.playVideo();
                    }
                }
            });
        }

        document.getElementById('mute-btn').addEventListener('click', function () {
            let icon = this.querySelector("i");
            if (player.isMuted()) {
                player.unMute();
                this.appendChild(icon);
                icon.className = "fa fa-volume-up"; // Change icon to volume up
            } else {
                player.mute();
                this.appendChild(icon);
                icon.className = "fa fa-volume-off"; // Change icon to volume off
            }
        });

        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);