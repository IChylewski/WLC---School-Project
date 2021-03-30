const editables = document.querySelectorAll("[contenteditable]");

editables.forEach( element => {
    element.addEventListener("input", () => {
        localStorage.setItem("dataStorage-" + element.id, element.innerHTML);
    })
})

for(let key in localStorage){
    if(key.includes("dataStorage-")){
        const id = key.replace("dataStorage-","");
        document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
    }
}

document.querySelector("#clearButton").addEventListener('click', () => {
    for(let key in localStorage){
        if(key.includes("dataStorage-")){
            const id = key.replace("dataStorage-","");
            document.querySelector("#" + id).innerHTML = "";
            localStorage.removeItem(key);
        }
    }
})