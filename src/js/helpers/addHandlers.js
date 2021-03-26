export function addHandlers(elements, removeListener) {
    // {
    //     elementSelector: ".btn-delete",
    //     eventName: "click",
    //     handler: "deleteTask"
    // },
    /*
    1. Найти элемент в разметке
    2. Навесить addEventListener на каждый
    3. Написать условие, которое проверяет, надо ли removeEventListener
    */
    // attachEvent(textarea, 'blur', onblur);
    elements.forEach(function(element){
        const domElements = document.querySelectorAll(element.elementSelector);
        domElements.forEach(function(domElement){
            domElement.addEventListener(element.eventName, function(e){
                element.handler(e)
            }, {once: removeListener});
        })
    })
}

//if(element.elementSelector === ".footer__btn") { // disable link redirect
// e.preventDefault();
// }
// if(e.type === "keydown" && e.keyCode === 13) {
//     console.log("Enter!!!");
// }