document.addEventListener("DOMContentLoaded", function() {
    // Task list where new tasks will be added
    const taskList = document.getElementById("taskList");

    // Add Task button and input field
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");

    // Add task when the Add Task button is clicked
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim(); // Get the task input value

        if (taskText !== "") {
            // Create a new list item (task)
            const newTask = document.createElement("li");

            // Create a new checkbox and task label
            const newTaskCheckbox = document.createElement("input");
            newTaskCheckbox.type = "checkbox";
            newTaskCheckbox.classList.add("task-checkbox");

            // Append checkbox and task text to the new task
            newTask.innerHTML = newTaskCheckbox.outerHTML + " " + taskText;

            // Add the new task to the list
            taskList.appendChild(newTask);

            // Clear the input field after adding the task
            taskInput.value = "";

            // Add event listener to remove task when checked off
            newTaskCheckbox.addEventListener("change", function() {
                if (newTaskCheckbox.checked) {
                    newTask.remove();
                }
            });
        }
    });

    // Add event listener to existing tasks
    const checkboxes = document.querySelectorAll("#taskList input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            const taskItem = checkbox.parentElement;
            if (checkbox.checked) {
                taskItem.remove(); // Remove the task item when it's checked
            }
        });
    });
});
