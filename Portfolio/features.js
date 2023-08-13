const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessage');

sendMessageBtn.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    messageInput.value = '';
  }
});

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value;
  if (task) {
    const taskElement = document.createElement('li');
    taskElement.textContent = task;
    taskList.appendChild(taskElement);
    taskInput.value = '';
  }
});
