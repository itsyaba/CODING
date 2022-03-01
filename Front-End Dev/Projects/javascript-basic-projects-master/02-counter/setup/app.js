const btns = document.querySelectorAll(".btn")
const value = document.querySelector("#value");

let count = 0;

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
            value.textContent = count;
            console.log(count)
        } else if (styles.contains("reset")) {
            count = 0;
            value.textContent = count;
        } else if (styles.contains("increase")) {
            count++;
            value.textContent = count;
        } 

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color= "red"
        } else if (count ===0) {
            value.style.color = "#222"
        }

    })
})
