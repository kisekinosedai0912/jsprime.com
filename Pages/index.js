function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function load(){
    var menu = document.getElementById("mobile-menu");
    menu.style.display = "none";
}