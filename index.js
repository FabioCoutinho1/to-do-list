const addForm = document.querySelector("#add-form")
const editForm = document.querySelector("#edit-form")
const editTodo = document.querySelector(".edit-todo")
const addTodo = document.querySelector(".add-todo")
const addInput = document.querySelector("#add-input")
const editInput = document.querySelector("#edit-input")
const todoList = document.querySelector(".todo-list")
const cancelBtn = document.querySelector("#cancel-btn")

// funçoes

const saveTodo = (Text) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = Text
    todo.appendChild(todoTitle)

    const todoButton = document.createElement("div")
    todoButton.classList.add("todo-button")

    const checkBnt = document.createElement("button")
    checkBnt.classList.add("finish-btn")
    checkBnt.innerHTML = '<span class="material-symbols-outlined">check</span>'
    todo.appendChild(checkBnt)
    

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    todo.appendChild(editBtn)
    

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>'
    todo.appendChild(deleteBtn)
    

    todoList.appendChild(todo)

    addInput.value = ``
    addInput.focus()
}

const toggleForms = () =>{
    editTodo.classList.toggle("hiden")
    addTodo.classList.toggle("hiden")
    todoList.classList.toggle("hiden")

    editInput.focus()
}

// eventos
addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = addInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) =>{

        const targetEl = e.target
        const parentEl = targetEl.closest("div")

        if(targetEl.classList.contains("finish-btn")){
            parentEl.classList.toggle("check")
        }

        if(targetEl.classList.contains("edit-btn")){
            toggleForms()
        }

        if(targetEl.classList.contains("delete-btn")){
            parentEl.remove()
        }
})

cancelBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    toggleForms()
})