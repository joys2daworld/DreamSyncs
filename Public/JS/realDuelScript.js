// realDuelScript.js

document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 10 * 60; // 10 minutes in seconds
    const timeRemainingElement = document.getElementById("timeRemaining");
    const shuffledQuestionsElement = document.getElementById("shuffledQuestions");

    // Retrieve questions and answers from localStorage
    const questionsAndAnswers = JSON.parse(localStorage.getItem("duelQuestionsAndAnswers"));

    // Shuffle the questions and answers
    const shuffledQuestions = shuffleArray(questionsAndAnswers);

    // Display the shuffled questions and answers
    shuffledQuestions.forEach((qa, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${qa.question}</p>
            <input type="text" id="answer${index + 1}" placeholder="Your answer" required>
        `;
        shuffledQuestionsElement.appendChild(questionElement);
    });

    // Start timer
    const timerInterval = setInterval(function () {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeRemainingElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! You can no longer answer questions.");
            document.getElementById("doneButton").disabled = true;
        } else {
            timeLeft--;
        }
    }, 1000);

    // Shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Handle the "Done" button click
    document.getElementById("doneButton").addEventListener("click", function () {
        // Collect answers
        let answers = [];
        shuffledQuestions.forEach((qa, index) => {
            const userAnswer = document.getElementById(`answer${index + 1}`).value;
            answers.push({ question: qa.question, userAnswer, correctAnswer: qa.answer });
        });

        // Save the answers or send them to a server here (mocked for now)
        localStorage.setItem("duelResults", JSON.stringify(answers));

        // Redirect to results page
        window.location.href = "/results.html"; // Replace with your actual results page URL
    });
});
