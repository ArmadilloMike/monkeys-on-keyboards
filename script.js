const monkeyGifs = [
    "monkeys/monkey1.gif",
    "monkeys/monkey2.gif",
    "monkeys/monkey3.gif",
    "monkeys/monkey4.gif",
    "monkeys/monkey5.gif",
    "monkeys/monkey6.gif",
    "monkeys/monkey7.gif",
    "monkeys/monkey8.gif",
    "monkeys/monkey9.gif",
    "monkeys/monkey10.gif"
]
let isRunning = false
let mode = "spam"
let intervalId = null

const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const modeBtn = document.getElementById("mode-btn")
const statusEl = document.getElementById("status")

updateStatus()

function buildGifBag(images, total) {
    const bag =[]
    while (bag.length < total) {
        bag.push(...images)
    }
    return bag.slice(0, total)
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateStatus() {
    statusEl.textContent = `Mode: ${mode === "spam" ? "Spam": "Words"} - ${isRunning ? "Running" : "Stopped"}`
}

const grid = document.getElementById("monkey-gifs")
const bag = shuffle(buildGifBag(monkeyGifs, 100));

for (let i = 0; i < 100; i++) {
    const img = document.createElement("img");
    img.src = bag[i];
    grid.appendChild(img);
}

startBtn.addEventListener("click", () => {
    isRunning = true
    updateStatus()
})

stopBtn.addEventListener("click", () => {
    isRunning = false
    updateStatus()
})

modeBtn.addEventListener("click", () => {
    mode = mode === "spam" ? "words" : "spam"
    modeBtn.textContent = "Mode: " + (mode === "spam" ? "Spam" : "Words")
    updateStatus()
})