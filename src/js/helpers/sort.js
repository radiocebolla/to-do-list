const sortCallback = (field) => {
    return (a, b) => a[field] === false && b[field] === true ? -1 : 1
}

export const sortTasks = (taskListArray) => {
    return taskListArray.sort(sortCallback('status'))
}