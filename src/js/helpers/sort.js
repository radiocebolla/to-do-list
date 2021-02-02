const sortTasks = (field) => {
    return (a, b) => a[field] === false && b[field] === true ? 1 : -1
}