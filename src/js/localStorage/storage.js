const defaultTasks = [
    {
        id: 1,
        text: "Съесть сырную пиццу 2 раза",
        status: true
    },
    {
        id: 2,
        text: "Позлословить",
        status: false
    },
    {
        id: 3,
        text: "Глянуть ссылку",
        status: true
    }
];

export function localStorageInit() {
    if(!localStorage.getItem("taskListArray")) {
        localStorage.setItem("taskListArray", JSON.stringify(defaultTasks));
    }
}

export function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("taskListArray"));
}
