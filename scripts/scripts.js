/*
Author: Oleksandr Pavych
Date: 05/23/2023
File Name: scripts.css
*/

// Hamburger menu function

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}