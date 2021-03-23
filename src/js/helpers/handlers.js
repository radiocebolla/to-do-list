import { addTaskToStorage, editTextTaskInStorage, changeStatusInStorage, deleteTaskFromStorage, deleteAllTasksFromStorage } from "./../localStorage/storage";
import { render } from "./../index";

export function addTask(e) {
    if(e.type === "keydown" && e.keyCode !== 13) return;
    const input = document.querySelector(".add-tasks__input");
    const inputValue = input.value;
    addTaskToStorage(inputValue);
    render();
}

export function deleteAllTasks(e) {
    deleteAllTasksFromStorage();
    render();
}

export function deleteTask(e) {
    const elem = e.target;
    const closestLiID = elem.closest(".list__item").getAttribute("data-id");
    deleteTaskFromStorage(closestLiID);
    render();
}

export function changeStatus(e) {
    const elem = e.target;
    const closestLiID = elem.closest(".list__item").getAttribute("data-id");
    changeStatusInStorage(closestLiID);
    render();
}

export function editTextTask(e) {
    if(e.type === "keydown" && e.keyCode !== 13) return;
    const inputValue = e.target.value;
    const closestLiID = e.target.closest(".list__item").getAttribute("data-id");
    // console.log(inputValue);
    // console.log(closestLiID);
    editTextTaskInStorage(closestLiID, inputValue);
    render();
}
