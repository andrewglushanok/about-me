const nameInput = document.getElementById("visitor-name");
const greetButton = document.getElementById("greet-button");
const greeting = document.getElementById("greeting");

function greetVisitor() {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name.";
    } else {
        greeting.textContent = "Hi, " + name + "! Welcome to my website.";
    }
}

greetButton.addEventListener("click", greetVisitor);

const themeButton = document.getElementById("theme-button");

function changeTheme() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }
}

themeButton.addEventListener("click", changeTheme);