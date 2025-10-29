// Wait for the HTML to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create the text span
    const span = document.createElement("span");
    span.textContent = taskText;

    // Add a click event to mark task as complete
    span.addEventListener("click", function () {
      span.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete");

    // Add delete functionality
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    // Add span and delete button to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to task list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
  });

  // Optional: Press Enter to add task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
});
