function addNewTask() {
    var taskContainer = document.createElement('div');
    taskContainer.className = 'task';

    var taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.className = 'task-input';


    var statuses = ['To do', 'In progress', 'Done'];

    var uniqueTime = new Date().getTime();
    statuses.forEach(function (status) {
        var label = document.createElement('label');
        var radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'taskStatus' + uniqueTime;
        radioButton.id = status + uniqueTime;
        radioButton.value = status;

        label.setAttribute('for', radioButton.id);
        label.appendChild(radioButton);
        label.appendChild(document.createTextNode(status));
        taskContainer.appendChild(label);
        taskContainer.appendChild(document.createElement('br'));
    });

    var applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.className = 'apply-button';


    applyButton.addEventListener('click', function () {

        var selectedStatus = document.querySelector('input[name="taskStatus' + uniqueTime + '"]:checked').value;
        switch (selectedStatus) {
            case 'To do':

                taskInput.classList.add('status-todo');
                taskInput.classList.remove('status-in-progress', 'status-done');
                break;

            case 'In progress':
                taskInput.classList.add('status-in-progress');
                taskInput.classList.remove('status-todo', 'status-done');
                break;

            case 'Done':
                taskInput.classList.add('status-done');
                taskInput.classList.remove('status-todo', 'status-in-progress');
                break;
        }

    });

    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(document.createElement('br'));

    taskContainer.appendChild(applyButton);
    taskContainer.appendChild(document.createElement('hr'));

    document.querySelector('main > section').appendChild(taskContainer);
}

document.getElementById('add_task_button').addEventListener('click', addNewTask);
