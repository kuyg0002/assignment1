function fetchTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear existing tasks
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                taskList.appendChild(li);
            });
        });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: task }),
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            taskInput.value = '';
