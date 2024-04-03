window.addEventListener("scroll", () => {
    const button = document.getElementById("arrow");
    const body = document.querySelector("body");
    const position = body.getBoundingClientRect();

    if (position.top < -80) {
        button.style.visibility = "visible";
    }
    else {
        button.style.visibility = "hidden";
    }
});

const navbar = document.querySelector('#navbar-default ul');

function colorAddRemove(eleme) {
    navbar.querySelectorAll("li a").forEach((elem) => {
        elem.classList.remove("md:dark:text-blue-500");
    });
    eleme.classList.add("md:dark:text-blue-500");
}

navbar.addEventListener('click', function (e) {
    if (e.target.href) {
        colorAddRemove(e.target);
    }
});

document.querySelector("#arrow").addEventListener("click", function () {
    colorAddRemove(document.querySelector("#homeA"));
});


// ScrollReveal({
//     // reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Backend Developer', 'Youtuber', 'Gamer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });