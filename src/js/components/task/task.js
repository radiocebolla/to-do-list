import { label } from "./../taskLabel/label";
import { taskDeleteBtn } from "./../task/taskDeleteBtn";
import { taskText } from "./../task/taskText";

export const Task = (task) => {
    return `<li class="list__item ${task.status ? "list__item_done" : ""}task" data-id="${task.id}">
                ${label(task.status)}
                ${taskText(task.text)}
                ${taskDeleteBtn()}
             </li>`
}


// комментарий для забывчивой девочки Даши, которая
// хочет вешать здесь обработчики событий, чтобы не 
// делать этого в render(). Даша, так нельзя, ибо
// здесь элемент ещё не встроен в вёрстку. Это ещё
// не элемент, это просто строка.