import { addTask, deleteAllTasks, deleteTask, changeStatus, editTextTask} from "./../helpers/handlers";

export const activeElements = {
    staticElements: [
        {
            elementSelector: ".add-tasks__input",
            eventName: "keydown",
            handler: addTask
        },
        {
            elementSelector: ".add-tasks__btn",
            eventName: "click",
            handler: addTask
        },
        {
            elementSelector: ".footer__btn",
            eventName: "click",
            handler: deleteAllTasks
        }
    ],
    dynamicElements: [
        {
            elementSelector: ".btn-delete",
            eventName: "click",
            handler: deleteTask
        },
        {
            elementSelector: ".task__checkbox",
            eventName: "click",
            handler: changeStatus
        },
        {
            elementSelector: ".task__text",
            eventName: "keydown",
            handler: editTextTask
        },
        {
            elementSelector: ".task__text",
            eventName: "change",
            handler: editTextTask
        }
    ]
}

// 1) btn-delete --> click (удалить одну задачу);
// 2) footer__btn --> click (удалить все задачи);
// 3) add-tasks__btn --> click (добавить задачу с помощью кнопки);
// 4) add-tasks__input --> enter (добавить одну задачу с помошью клавиатуры);
// 5) task__checkbox --> click (Изменение статуса по клику на чекбокс);
// 6) task__text --> enter (изменить текст задачи);
// 7) task__text --> change (изменить текст задачи по клику вне области);

