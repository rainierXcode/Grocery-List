let listOfItems = ["Item1"]
const ULList = document.querySelector(".listItem");
const input = document.querySelector(".submitBox input")
const submitButton = document.querySelector(".submitBox button")

// renameItem function
function renameItem(changeButton, editButton, deleteButton, inputElement) {
    editButton.classList.add("fade-out")
    deleteButton.classList.add("fade-out")

    setTimeout(()=>{
        inputElement.classList.add("canRename");
        inputElement.removeAttribute("readonly");
        editButton.style.display = "none"
        deleteButton.style.display = "none"
        editButton.classList.remove("fade-out")
        deleteButton.classList.remove("fade-out")
        changeButton.style.display = "block"
        changeButton.classList.add("fade-in")

    },200)
  }
  
  // changeButtonClicked function
  function changeButtonClicked(inputElement, changeButton, editButton, deleteButton, index) {
    listOfItems[index] = inputElement.value;

    changeButton.classList.add("fade-out")

    setTimeout(()=>{
        inputElement.classList.remove("canRename");
        inputElement.setAttribute("readonly", true);
        changeButton.style.display = "none"
        changeButton.classList.remove("fade-out")
        editButton.style.display = "block"
        deleteButton.style.display = "block"
        editButton.classList.add("fade-in")
        deleteButton.classList.add("fade-in")

    },200)
  }
  

function submit() {
    const itemValue = input.value;
    input.value = ""
    submitButton.style.pointerEvents = "none"
    submitButton.style.backgroundColor = '#6F8176';
    listOfItems.push(itemValue);
    displayAllItems(listOfItems)
}


function deleteItems(index){
    listOfItems.splice(index,1)
    displayAllItems(listOfItems)
}



function clearAllItems() {
    const items = document.querySelectorAll(".listItem li")
    listOfItems = []
    displayAllItems(listOfItems)
}




const clearAll = document.querySelector(".clearItem")
clearAll.addEventListener("click", () => {
clearAllItems()
})



input.addEventListener('input', ()=>{
    const inputValue = input.value;
    if(inputValue.length != 0){
    submitButton.style.pointerEvents = "auto"
    submitButton.style.backgroundColor = '#010100';
    }
    else{
        submitButton.style.pointerEvents = "none"
        submitButton.style.backgroundColor = '#6F8176';
    }
})

function modifying(){
    const items = document.querySelectorAll(".listItem li")

    items.forEach((li, index) => {
        const editButton = li.querySelector(".itemIcon .editIcon");
        const changeButton = li.querySelector(".change-button");
        const inputElement = li.querySelector(".itemName");
        const deleteButton = li.querySelector(".deleteIcon");
    
        editButton.addEventListener('click', () => {
            renameItem(changeButton, editButton, deleteButton, inputElement);
        });
    
        changeButton.addEventListener('click', (event) => {
            const clickedIndex = [...items].indexOf(event.target.closest("li"));
            changeButtonClicked(inputElement, changeButton, editButton, deleteButton,index);
        });
    
        deleteButton.addEventListener('click', (event) => {
            const clickedIndex = [...items].indexOf(event.target.closest("li"));
            li.classList.add("delete")
            console.log(li)
            setTimeout(() => {
  
              // This part will execute after a delay of 10 seconds
              deleteItems(clickedIndex);
            }, 200);
            
        });
    });
    
}


function createSingleItem(itemName) {

    const editIcon = `<svg class="editIcon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.78 0L16.3657 2.52791L14.3945 4.45587L11.8089 1.92795L13.78 0ZM4.30948 11.7868H6.89517L13.1758 5.64651L10.5901 3.1186L4.30948 9.2589V11.7868Z" fill="black" />
  <path d="M13.7904 14.3148H4.44567C4.42326 14.3148 4.39999 14.3232 4.37758 14.3232C4.34914 14.3232 4.32069 14.3156 4.29139 14.3148H1.7238V2.51784H7.62521L9.349 0.832569H1.7238C0.773122 0.832569 0 1.58757 0 2.51784V14.3148C0 15.245 0.773122 16 1.7238 16H13.7904C14.2475 16 14.686 15.8225 15.0093 15.5064C15.3325 15.1904 15.5142 14.7617 15.5142 14.3148V7.01078L13.7904 8.69606V14.3148Z" fill="black" />
</svg>`;

    const deleteIcon = '<svg class="deleteIcon" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.38857 14.2222C1.38857 15.2 2.30914 16 3.43429 16H11.6171C12.7423 16 13.6629 15.2 13.6629 14.2222V3.55556H1.38857V14.2222ZM14.6857 0.888889H11.1057L10.0829 0H4.96857L3.94571 0.888889H0.365715V2.66667H14.6857V0.888889Z" fill="black" /></svg>'


    const listItemTemplate = `
    <li class="new">
      <input type="text" value="${itemName}" readonly class="itemName">
      <button class="change-button">Change</button>
      <div class="itemIcon">
        ${editIcon}
        ${deleteIcon}
      </div>
    </li>
  `;
  

    return listItemTemplate;
}

function clearItemsTextChecker(){
    return (listOfItems.length == 0) ?  clearAll.classList.toggle("cleared") : clearAll.classList.remove("cleared")
}

function displayAllItems(list) {
    let compile = "";
    let newItem = ""
    for (let item = 0; item < list.length; item++) {
        newItem = createSingleItem(list[item]);
        compile += newItem;
    }
    ULList.innerHTML = compile;
    clearItemsTextChecker()
    modifying()
}



displayAllItems(listOfItems)















