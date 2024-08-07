document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", addTask);
  taskList.addEventListener("click", handleTaskActions);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
              <input type="checkbox">
              <span>${taskText}</span>
              <button>Remover</button>
          `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }

  function handleTaskActions(e) {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
    } else if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      e.target.parentElement.classList.toggle("completed");
    }
  }
});
