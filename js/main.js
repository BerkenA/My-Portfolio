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

document.addEventListener('DOMContentLoaded', function() {
    function handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-scroll') || this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`No element found with id: ${targetId}`);
        }
    }

    const links = document.querySelectorAll('nav ul li a[data-scroll]');
    links.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    const burgerLinks = document.querySelectorAll('#burgerMenu a[href^="#"]');
    burgerLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
});




