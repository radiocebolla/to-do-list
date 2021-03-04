import { Task } from "./../task/task";

export function taskList(tasks) {
    return `<ul class="tasks__list list">${
        tasks.map(function(task){
            return Task(task)
        }).join("")}
    </ul>`;
}