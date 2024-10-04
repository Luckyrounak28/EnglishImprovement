const words = [
    {
        word: "Aberration",
        meanings: [
            "A departure from what is normal or expected.",
            "An error in a calculation.",
            "A type of software.",
        ],
        correctMeaning: "A departure from what is normal or expected."
    },
    {
        word: "Cacophony",
        meanings: [
            "A harsh, discordant mixture of sounds.",
            "A beautiful melody.",
            "A type of flower.",
        ],
        correctMeaning: "A harsh, discordant mixture of sounds."
    },
    {
        word: "Ebullient",
        meanings: [
            "Cheerful and full of energy.",
            "Sad and gloomy.",
            "Calm and composed.",
        ],
        correctMeaning: "Cheerful and full of energy."
    },
    // Add more words as needed
];

let currentWordIndex = 0;

function loadWord() {
    if (currentWordIndex < words.length) {
        const wordData = words[currentWordIndex];
        document.getElementById("wordDisplay").innerText = wordData.word;

        const optionsContainer = document.getElementById("optionsContainer");
        optionsContainer.innerHTML = "";

        wordData.meanings.forEach(meaning => {
            const button = document.createElement("button");
            button.innerText = meaning;
            button.onclick = () => checkAnswer(meaning);
            optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById("gameContainer").innerHTML = "<h2>Game Over! Thanks for playing!</h2>";
    }
}

function checkAnswer(selectedMeaning) {
    const wordData = words[currentWordIndex];
    const resultMessage = document.getElementById("resultMessage");

    if (selectedMeaning === wordData.correctMeaning) {
        resultMessage.innerText = "Correct!";
    } else {
        resultMessage.innerText = `Wrong! The correct meaning is: ${wordData.correctMeaning}`;
    }

    currentWordIndex++;
    document.getElementById("nextButton").style.display = "block";
}

document.getElementById("nextButton").onclick = () => {
    document.getElementById("resultMessage").innerText = "";
    loadWord();
    document.getElementById("nextButton").style.display = "none";
};

// Load the first word when the game starts
loadWord();
