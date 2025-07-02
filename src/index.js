document.addEventListener("DOMContentLoaded", () => {
  // Grab the form and task list
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop the page from refreshing

    // Get task text
    const task = taskInput.value;

    // Create a new <li> element
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    // Append the task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    form.reset();
  });
});

