export function taskCheckbox(status) {
    return `<input class="task__checkbox" type="checkbox" ${status ? "checked" : ""}>`;
}