const taskForm = document.querySelector('.task-form');
const taskList = document.querySelector('.task-list');
const select = document.querySelector('#select');
const options = document.querySelectorAll('.option');
const taskInput = document.querySelector('.task-input');

const tasksArray = [
  { task: 'submit project', deadLine: new Date() },
  { task: 'presentation', deadLine: new Date('2023-11-17') },
  { task: 'documentation', deadLine: new Date('2024-01-23') },
  { task: 'wedding', deadLine: new Date('2024-06-14') },
  { task: 'meeting', deadLine: new Date('2024-03-10') },
  { task: 'tour', deadLine: new Date('2024-05-29') },
  { task: 'birth day', deadLine: new Date('2024-04-29') },
];

const LoadTasks = () => {
  tasksArray.forEach((taskValue) => {
    const { task } = taskValue;
    const option = document.createElement('option');
    option.classList.add('option');
    option.textContent = task;
    option.value = task;
    select.appendChild(option);

    //change the value of the selected task and the input as we select the from drop down;
    select.addEventListener('change', (e) => {
      taskInput.value = e.target.value;
    });
  });
};

window.addEventListener('DOMContentLoaded', LoadTasks);

const checkTask = (e) => {
  e.preventDefault();
  const form = e.target;
  const selectedTask = form.firstElementChild.value;

  tasksArray.forEach((taskObj) => {
    const { task, deadLine } = taskObj;
    if (selectedTask === task) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = `${task} should be done by ${deadLine}`;

      li.appendChild(span);
      taskList.appendChild(li);
    }
  });
};

taskForm.addEventListener('submit', checkTask);
