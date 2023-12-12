function renameItem(list) {
    const inputElement = list.querySelector(".itemName");
    const inputElementEditButton = list.querySelector(".editIcon")
    const inputElementDeleteButton = list.querySelector(".deleteIcon")
    const changeButton = list.querySelector(".change-button")
    changeButton.style.display = "block"

    inputElementEditButton.style.display = "none"
    inputElementDeleteButton.style.display = "none"

    inputElement.classList.add("canRename");
    inputElement.removeAttribute("readonly")
}


const listItem = document.querySelectorAll(".listItem li")

listItem.forEach(li => {
    const editButton = li.querySelector(".editIcon");
    const changeButton = li.querySelector(".change-button")
    const inputElement = li.querySelector(".itemName");
    const inputElementEditButton = li.querySelector(".editIcon")
    const inputElementDeleteButton = li.querySelector(".deleteIcon")

    let itemName = inputElement.value;

    inputElementEditButton.addEventListener('click', () => {
        renameItem(li)
    })

    inputElement.addEventListener('input', function (event) {
        itemName = event.target.value;
    })

    changeButton.addEventListener('click', () => {
        inputElement.value = itemName;
        changeButton.style.display = "none"
        inputElement.classList.remove("canRename");
        inputElement.setAttribute("readonly", true);
        inputElementEditButton.style.display = "block"
        inputElementDeleteButton.style.display = "block"
    })

    inputElementDeleteButton.addEventListener('click', ()=>{
        li.style.display = "none"
    })
})

function clearItems(){
    listItem.forEach( li =>{
        li.style.display = "none"
    })
}

const clearAll = document.querySelector(".clearItem")
clearAll.addEventListener("click", ()=>{
    clearItems()
})