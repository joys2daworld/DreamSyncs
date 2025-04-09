document.addEventListener("DOMContentLoaded", function () {
    const qaForm = document.getElementById("qaForm");
    const qaFields = document.getElementById("qaFields");
    const timeRemainingElement = document.getElementById("timeRemaining");
    let timeLeft = 15 * 60; // 15 minutes for question/answer submission

    // Dynamically generate 10 question-answer fields
    for (let i = 0; i < 10; i++) {
        const questionLabel = document.createElement("label");
        questionLabel.textContent = `Question ${i + 1}:`;

        const questionInput = document.createElement("input");
        questionInput.type = "text";
        questionInput.id = `question${i + 1}`;
        questionInput.placeholder = `Enter Question ${i + 1}`;
        questionInput.required = true;

        const answerLabel = document.createElement("label");
        answerLabel.textContent = `Answer ${i + 1}:`;

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.id = `answer${i + 1}`;
        answerInput.placeholder = `Enter Answer ${i + 1}`;
        answerInput.required = true;

        const qaContainer = document.createElement("div");
        qaContainer.appendChild(questionLabel);
        qaContainer.appendChild(questionInput);
        qaContainer.appendChild(answerLabel);
        qaContainer.appendChild(answerInput);

        qaFields.appendChild(qaContainer);
    }

    // Start the timer for question-answer submission
    const timerInterval = setInterval(function () {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeRemainingElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! You can no longer submit questions.");
            // Optionally, disable the submit button if time runs out
            document.getElementById('submitQuestionsButton').disabled = true;
        } else {
            timeLeft--;
        }
    }, 1000);

    // Handle the question-answer form submission
    qaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let questionsAndAnswers = [];
        for (let i = 0; i < 10; i++) {
            const question = document.getElementById(`question${i + 1}`).value;
            const answer = document.getElementById(`answer${i + 1}`).value;
            questionsAndAnswers.push({ question, answer });
        }

        // Save questions and answers to localStorage
        localStorage.setItem("duelQuestionsAndAnswers", JSON.stringify(questionsAndAnswers));

        // Redirect to the duel page where they will answer the shuffled questions
        window.location.href = "/real-duel.html"; // Redirect to duel phase page
    });
});
