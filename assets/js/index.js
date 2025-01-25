function myFunction() {
    var x = document.getElementById("myTopnav");
    var nav = document.getElementsByClassName('nav')[0];

    if (x.className === "topnav") {
        nav.classList.add("responsive");
        setTimeout(function () {
            nav.classList.add("open"); // Add 'open' after responsiveness is applied
        }, 10); // Small timeout for smooth transition
        document.body.style.overflow = 'hidden';
    } else {
        nav.classList.remove("open"); // Remove the 'open' class for closing animation
        setTimeout(function () {
            nav.classList.remove("responsive"); // Remove 'responsive' after animation ends
        }, 300); // This should match the transition time in CSS (0.3s)
        document.body.style.overflow = 'auto';
    }
}

function myFunctionClose() {
    var nav = document.getElementsByClassName('nav')[0];
    nav.classList.remove("open");
    setTimeout(function () {
        nav.classList.remove("responsive");
    }, 300); // Match transition duration
    document.body.style.overflow = 'auto';
}
