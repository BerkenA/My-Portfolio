document.getElementById("burgerOpen").addEventListener("click", function () {
    let menu = document.getElementById("burgerMenu"); // Changed to target #burgerMenu
    let burgerOpenIcon = document.getElementById("burgerOpenIcon");
    let burgerCloseIcon = document.getElementById("burgerCloseIcon");
    if (menu.style.display === "none" || menu.style.display === "") { 
        menu.style.display = "flex";
        burgerOpenIcon.style.display = "none";
        burgerCloseIcon.style.display = "block";
    } else {
        menu.style.display = "none";
        burgerOpenIcon.style.display = "block";
        burgerCloseIcon.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.videoPlayer');

    function checkVideosInView() {
        videos.forEach(video => {
            if (video instanceof HTMLVideoElement) {
                const rect = video.getBoundingClientRect();
                const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

                if (isInView) {
                    if (video.paused && video.currentTime === 0 || video.ended) {
                        video.play();
                    }
                } else {
                    video.pause();
                }
            }
        });
    }

    function handleVideoEnd(event) {
        const video = event.target;
        const rect = video.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInView) {
            video.currentTime = 0;
            video.play();
        }
    }

    videos.forEach(video => {
        if (video instanceof HTMLVideoElement) {
            video.addEventListener('ended', handleVideoEnd);
        }
    });

    window.addEventListener('scroll', checkVideosInView);
    checkVideosInView();
});


