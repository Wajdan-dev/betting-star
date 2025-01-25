function myFunction() {
    var x = document.getElementById("myTopnav");
    var nav = document.getElementsByClassName('nav')[0];

    if (x.className === "topnav") {
        nav.className += " responsive";
        document.body.style.overflow = 'hidden';
    } else {
        nav.className = "nav";
    }
}

function myFunctionClose() {
    var nav = document.getElementsByClassName('nav')[0];
    nav.classList.remove("responsive");
    document.body.style.overflow = 'auto';

}
