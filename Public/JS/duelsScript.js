// duelsScript.js
document.addEventListener("DOMContentLoaded", function () {
    const challengeForm = document.getElementById("challengeForm");

    challengeForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent the default form submission

        // You can get the challenge task and competitor if needed:
        const challengeTask = document.getElementById("challengeTask").value;
        const competitor = document.getElementById("competitor").value;

        // Redirect to duel.html after challenge submission
        window.location.href = "/duel.html"; // This will redirect to duel.html

        // Optionally, you can log this info to ensure the data is collected correctly:
        console.log(`Challenge Submitted: Task - ${challengeTask}, Competitor - ${competitor}`);
    });
});
