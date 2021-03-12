import { taskList } from "./components/taskList/taskList";
import { localStorageInit } from "./localStorage/storage";
import { getDataFromLocalStorage } from "./localStorage/storage";
import { activeElements } from "./constants/constants";
import { addHandlers } from "./helpers/addHandlers";

function render() {
    const container = document.querySelector(".tasks .container");
    const taskListArray = getDataFromLocalStorage();
    container.innerHTML = taskListArray.length ? taskList(taskListArray) : "Место для твоих задач";
    addHandlers(activeElements.dynamicElements, true);
}

function init() {
    localStorageInit();
    render();
    addHandlers(activeElements.staticElements, false);
}

init();