function renameItem(list){
    const inputElement = list.querySelector(".itemName");
    const inputElementEditButton = list.querySelector(".editIcon")
    const inputElementDeleteButtodn = list.querySelector(".deleteIcon")
    const changeButton = list.querySelector(".change-button")
    changeButton.style.display = "block"

    inputElementEditButton.style.display = "none"
    inputElementDeleteButtodn.style.display = "none"

    inputElement.classList.add("canRename");
    inputElement.removeAttribute("readonly")
}

const listItem = document.querySelectorAll(".listItem li")

listItem.forEach( li =>{
    const editButton = li.querySelector(".editIcon");
    const changeButton = li.querySelector(".change-button")
    const inputElement = li.querySelector(".itemName");
    const inputElementEditButton = li.querySelector(".editIcon")
    const inputElementDeleteButtodn = li.querySelector(".deleteIcon")

    let itemName = inputElement.value;

    editButton.addEventListener('click', ()=>{
       renameItem(li) 
    })

    inputElement.addEventListener('input', function(event){
        itemName = event.target.value;
    })
    changeButton.addEventListener('click', ()=>{
        const inputElement = li.querySelector(".itemName");
        inputElement.value = itemName;
        changeButton.style.display = "none"
        inputElement.classList.remove("canRename");
        inputElementEditButton.style.display = "block"
        inputElementDeleteButtodn.style.display = "block"
    })
})