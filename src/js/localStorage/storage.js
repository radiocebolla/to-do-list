// const defaultTasks = [
//     {
//         id: 1,
//         text: "Съесть сырную пиццу 2 раза",
//         status: true
//     },
//     {
//         id: 2,
//         text: "Позлословить",
//         status: false
//     },
//     {
//         id: 3,
//         text: "Глянуть ссылку",
//         status: true
//     }
// ];

export function localStorageInit() {
    if(!localStorage.getItem("taskListArray")) {
        localStorage.setItem("taskListArray", JSON.stringify([]));
    }
}

export function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("taskListArray"));
}

export function addTaskToStorage(inputValue) {
    let currentTasksArray = JSON.parse(localStorage.getItem("taskListArray"))
    const lastItem = currentTasksArray[currentTasksArray.length - 1];
    const taskID = lastItem === undefined ? 1 : lastItem.id + 1;
    const newTask = {
        id: taskID,
        text: inputValue,
        status: false
    }
    currentTasksArray.push(newTask)
    localStorage.setItem("taskListArray", JSON.stringify(currentTasksArray))

}

export function editTextTaskInStorage(dataId, inputValue) {
    let currentTasks = JSON.parse(localStorage.getItem("taskListArray"));
    const newTasksArray = currentTasks.map(function(task) {
        if(task.id === Number.parseInt(dataId)) {
            task.text = inputValue;
            return task;
        }
        return task;
    })
    

    localStorage.setItem("taskListArray", JSON.stringify(newTasksArray));
}

export function changeStatusInStorage(dataId) {
    let currentTasks = JSON.parse(localStorage.getItem("taskListArray"));
    const newTasksArray = currentTasks.map(function(task) {
        if(task.id === Number.parseInt(dataId))
        {
            if (task.status === false)
            {
                task.status = true;
            }
            else {
                task.status = false;
            }
        }
        return task;
    })
    localStorage.setItem("taskListArray", JSON.stringify(newTasksArray));
}

// положить в переменнную текущий список задач
// создать новую переменную
// положить туда новый массив
export function deleteTaskFromStorage(dataId) {
    const currentTasks = JSON.parse(localStorage.getItem("taskListArray"));
    const newTasksArray = currentTasks.filter(function(task){
        if (task.id === Number.parseInt(dataId)) {
            return false
        }
        else {
            return true
        }
    })
    localStorage.setItem("taskListArray", JSON.stringify(newTasksArray));
}


export function deleteAllTasksFromStorage() {
    localStorage.setItem("taskListArray", JSON.stringify([]));
}
