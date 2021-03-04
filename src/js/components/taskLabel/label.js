import { labelMark } from "./labelMark";
import { taskCheckbox } from "./taskCheckbox";

export function label(status) {
    return `<label class="label">${taskCheckbox(status)}${labelMark()}</label>`
}