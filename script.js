document.getElementById("search").addEventListener("click", () => {
    document.getElementById("search").style.display = "none";
    document.getElementById("input").style.display = "block";
    document.getElementById("cross").style.display = "block";
})

document.getElementById("cross").addEventListener("click", () => {
    document.getElementById("cross").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("search").style.display = "block";
})

// Adding Event Listeners to each button

let downArrow1 = document.getElementById("down1");
let upArrow1 = document.getElementById("upArrow1");

downArrow1.addEventListener("click", () => {
    document.getElementById("para1").style.display = "block";
    upArrow1.style.display = "block";
    downArrow1.style.display = "none";
})
upArrow1.addEventListener("click", () => {
    document.getElementById("para1").style.display = "none";
    upArrow1.style.display = "none";
    downArrow1.style.display = "block";
})

let downArrow2 = document.getElementById("down2");
let upArrow2 = document.getElementById("upArrow2");

downArrow2.addEventListener("click", () => {
    document.getElementById("para2").style.display = "block";
    upArrow2.style.display = "block";
    downArrow2.style.display = "none";
})
upArrow2.addEventListener("click", () => {
    document.getElementById("para2").style.display = "none";
    upArrow2.style.display = "none";
    downArrow2.style.display = "block";
})

let downArrow3 = document.getElementById("down3");
let upArrow3 = document.getElementById("upArrow3");

downArrow3.addEventListener("click", () => {
    document.getElementById("para3").style.display = "block";
    upArrow3.style.display = "block";
    downArrow3.style.display = "none";
})

upArrow3.addEventListener("click", () => {
    document.getElementById("para3").style.display = "none";
    upArrow3.style.display = "none";
    downArrow3.style.display = "block";
})

let downArrow4 = document.getElementById("down4");
let upArrow4 = document.getElementById("upArrow4");

downArrow4.addEventListener("click", () => {
    document.getElementById("para4").style.display = "block";
    upArrow4.style.display = "block";
    downArrow4.style.display = "none";
})
upArrow4.addEventListener("click", () => {
    document.getElementById("para4").style.display = "none";
    upArrow4.style.display = "none";
    downArrow4.style.display = "block";
})

// Adding Event listener to Hamburger
document.getElementById("hamburger").addEventListener("click" , () => {
    document.getElementById("another-nav").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
})

document.getElementById("cross2").addEventListener("click" , () => {
    document.getElementById("another-nav").style.display = "none";
    document.getElementById("hamburger").style.display = "block";
})