// ul class="task-list"

import { taskBlock } from './../taskBlock/taskBlock';

export const taskList = (taskListArray) => {
    return `
    <ul class="task-list">
        ${taskListArray.map(task => {
            return taskBlock(task)
        }).join("")}
    </ul>
    `
};