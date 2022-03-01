const btn = document.getElementById("btn");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");

btn.addEventListener("click" , function () {
    const random_color = getRandomNumber();
    document.body.style.backgroundColor = colors[random_color];
    color.textContent = colors[random_color]

})

function getRandomNumber() {
    return Math.round(Math.random() * colors.length)
}

// DONE