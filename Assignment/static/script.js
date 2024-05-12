document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    let tasks = [];

    // Function to dynamically generate tasks list
    function generateTask(task, index) {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <button class="complete-btn" data-index="${index}">Complete</button>
        `;
        return li;
    }

    // Function to refresh tasks list
    function refreshTaskList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            taskList.appendChild(generateTask(task, index));
        });
    }

    // Event listener for adding a task
    addTaskBtn.addEventListener("click", function() {
        const task = taskInput.value.trim();
        if (task !== "") {
            tasks.push(task);
            refreshTaskList();
            taskInput.value = "";
        }
    });

    // Event listener for deleting a task
    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const index = event.target.getAttribute("data-index");
            tasks.splice(index, 1);
            refreshTaskList();
        }
    });

    // Event listener for completing a task
    taskList.addEventListener("click", function(event) {
        if (event.target.classList.contains("complete-btn")) {
            const index = event.target.getAttribute("data-index");
            tasks[index] = `<del>${tasks[index]}</del>`;
            refreshTaskList();
        }
    });
});
