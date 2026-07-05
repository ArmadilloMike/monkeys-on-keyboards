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

const grid = document.getElementById("monkey-gifs")
const bag = shuffle(buildGifBag(monkeyGifs, 100));

for (let i = 0; i < 100; i++) {
    const img = document.createElement("img");
    img.src = bag[i];
    grid.appendChild(img);
}