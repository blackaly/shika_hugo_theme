const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const p = document.querySelectorAll('p');
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});