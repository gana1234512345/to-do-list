document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Add a remove button to each task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
});
