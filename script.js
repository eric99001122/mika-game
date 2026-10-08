console.log("Hello World!")
let day = 1;
let mood = 80;
let stamina = 70;
let affection = 20;
let study = 0;

function updateScreen() {
    document.getElementById("day").textContent = day;
    document.getElementById("mood").textContent = mood;
    document.getElementById("stamina").textContent = stamina;
    document.getElementById("affection").textContent = affection;
    document.getElementById("study").textContent = study;
}

function studyAction() {
    if (stamina < 15) {
        document.getElementById("message").textContent =
            "咪卡太累了，沒辦法學習。";
        return;
    }

    stamina -= 15;
    mood -= 5;
    study += 10;

    document.getElementById("message").textContent =
        "咪卡認真學習了一段時間！";

    updateScreen();
}

function restAction() {
    stamina += 25;
    mood += 10;

    if (stamina > 100) {
        stamina = 100;
    }

    if (mood > 100) {
        mood = 100;
    }

    document.getElementById("message").textContent =
        "咪卡好好休息了一下。";

    updateScreen();
}

function playAction() {
    if (stamina < 10) {
        document.getElementById("message").textContent =
            "咪卡沒有力氣玩了。";
        return;
    }

    stamina -= 10;
    mood += 15;
    affection += 5;

    if (mood > 100) {
        mood = 100;
    }

    if (affection > 100) {
        affection = 100;
    }

    document.getElementById("message").textContent =
        "咪卡玩得很開心！好感度上升了。";

    updateScreen();
}

function eatAction() {
    stamina += 20;
    mood += 5;

    if (stamina > 100) {
        stamina = 100;
    }

    if (mood > 100) {
        mood = 100;
    }

    document.getElementById("message").textContent =
        "咪卡吃了一頓好吃的！";

    updateScreen();
}

updateScreen();