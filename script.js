const menuIcon = document.getElementById("menuicon");
const Line1 = document.querySelector(".line1");
const Line2 = document.querySelector(".line2");
const Line3 = document.querySelector(".line3");
const sideBar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("isOpened")) {
        Line1.classList.remove("rotateLine1");
        Line2.classList.remove("hideLine2");
        Line3.classList.remove("rotateLine3");
        sideBar.classList.remove("togglesideBar");
        menuIcon.classList.remove("isOpened");
        window.onscroll = () => {
            Line1.classList.remove("rotateLine1");
            Line2.classList.remove("hideLine2");
            Line3.classList.remove("rotateLine3");
            sideBar.classList.remove("togglesideBar");
             menuIcon.classList.remove("isOpened");
        }
    }else {
        Line1.classList.add("rotateLine1");
        Line2.classList.add("hideLine2");
        Line3.classList.add("rotateLine3");
        sideBar.classList.add("togglesideBar");
        menuIcon.classList.add("isOpened");    
    }
    
})