document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
      span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
});
