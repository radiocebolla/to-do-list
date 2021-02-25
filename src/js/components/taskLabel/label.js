import { labelMark } from "./labelMark.js";
import { taskCheckbox } from "./taskCheckbox.js";

export function label() {
    return `<label class="label">${taskCheckbox()}${labelMark()}</label>`
}
