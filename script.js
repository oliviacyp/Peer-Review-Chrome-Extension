search(document.body)
warning()

var flag = false;

function search(element){
    if (element.hasChildNodes()) {
        element.childNodes.forEach(search)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/not peer reviewed/gi)||
            element.textContent.match(/not peer-reviewed/gi)||
            element.textContent.match(/non peer reviewed/gi)||
            element.textContent.match(/non-peer reviewed/gi)) {
            flag = true;
        }
    }
}

function warning(){
    if (flag == true) {
        alert("This article may not be peer reviewed.")
    }
}