import { taskList } from "./components/taskList/taskList";
import { localStorageInit } from "./localStorage/storage";
import { getDataFromLocalStorage } from "./localStorage/storage";
import { activeElements } from "./constants/constants";
import { addHandlers } from "./helpers/addHandlers";
import { sortTasks } from "./helpers/sort";

export function render() {
    const container = document.querySelector(".tasks .container");
    const taskListArray = getDataFromLocalStorage();
    let toSort = [...taskListArray];
    toSort = sortTasks(toSort);
    container.innerHTML = taskListArray.length ? taskList(toSort) : `<p class="blank">Место для твоих задач</p>`;
    addHandlers(activeElements.dynamicElements, true);
}

function init() {
    localStorageInit();
    render();
    addHandlers(activeElements.staticElements, false);
}

init();