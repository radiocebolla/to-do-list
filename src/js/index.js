import { taskList } from "./components/taskList/taskList.js";
const tasks = [
    'task 1',
    'task 2',
    'task 3',
    'task 4',
];

function render() {
    const container = document.querySelector(".tasks .container");
    const list = taskList(tasks);
    console.log(list)
    container.innerHTML = list;
}

render();