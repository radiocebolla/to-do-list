export function addHandlers(elements, removeListener) {

    elements.forEach(function(element){
        const domElements = document.querySelectorAll(element.elementSelector);
        domElements.forEach(function(domElement){
            domElement.addEventListener(element.eventName, function(e){
                element.handler(e)
            }, {once: removeListener});
        })
    })
}

