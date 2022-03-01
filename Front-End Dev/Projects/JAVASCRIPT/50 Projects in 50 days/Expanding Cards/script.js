const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        remove_active()
        panel.classList.add('active');
    })
})

function remove_active() {
    panels.forEach(panel => {
            panel.classList.remove('active');
    })
}