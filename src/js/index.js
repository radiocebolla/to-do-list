import { taskList } from "./components/taskList/taskList";
import { localStorageInit } from "./localStorage/storage";
import { getDataFromLocalStorage } from "./localStorage/storage";

function render() {
    const container = document.querySelector(".tasks .container");
    const taskListArray = getDataFromLocalStorage();
    container.innerHTML = taskListArray.length ? taskList(taskListArray) : "Место для твоих задач";
}

function init() {
    localStorageInit();
    render();
}

init();