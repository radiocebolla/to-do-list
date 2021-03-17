import { addTaskToStorage, editTextTaskInStorage } from "./../localStorage/storage";
import { render } from "./../index";

export function addTask(e) {
    if(e.type === "keydown" && e.keyCode !== 13) return;
    const input = document.querySelector(".add-tasks__input");
    const inputValue = input.value;
    addTaskToStorage(inputValue);
    render();
}

export function deleteAllTasks(e) {
    console.log("deleteAllTasks", e.type);
}

export function deleteTask(e) {
    console.log("deleteTask", e.type);
}

export function changeStatus(e) {
    
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
