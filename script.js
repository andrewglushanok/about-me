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


const goals = [
    { text: "Learn JavaScript", done: false },
    { text: "Practice Git", done: true }
];

const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.getElementById("goal-list");
const goalCount = document.getElementById("goal-count");
const goalMessage = document.getElementById("goal-message");

function renderGoals() {
    goalList.replaceChildren();

    goals.forEach(function(goal, index) {
        const item = document.createElement("li");
        const label = document.createElement("span");

        label.textContent = goal.text;
        item.append(label);

       
const removeButton = document.createElement("button");

removeButton.type = "button";
removeButton.textContent = "Remove";

removeButton.setAttribute(
    "aria-label",
    "Remove " + goal.text
);

removeButton.addEventListener("click", function() {
    goals.splice(index, 1);
    renderGoals();
});

item.append(removeButton);

        goalList.append(item);
    });

    goalCount.textContent = "Goals: " + goals.length;
}

renderGoals();

goalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = goalInput.value.trim();

    if (text === "") {
        goalMessage.textContent = "Enter a goal first.";
        return;
    }

    goals.push({ text: text, done: false });
    renderGoals();

    goalInput.value = "";
    goalMessage.textContent = "Goal added.";
    goalInput.focus();
});

