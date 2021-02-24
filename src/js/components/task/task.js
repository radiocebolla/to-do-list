import { label } from "./../taskLabel/label";
// import taskText
// import deleteBtn

export const Task = (task) => {
    return `<li class="list__item task">${label()}</li>`
}

// комментарий для забывчивой девочки Даши, которая
// хочет вешать здесь обработчики событий, чтобы не 
// делать этого в render(). Даша, так нельзя, ибо
// здесь элемент ещё не встроен в вёрстку. Это ещё
// не элемент, это просто строка.