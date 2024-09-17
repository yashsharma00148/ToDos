let addBtn=document.querySelector(".input-btn")
let tasks=document.querySelector(".tasks")
let input=document.querySelector("#input")
addBtn.addEventListener("click",()=>{
    if(input.value!=""){
        addTask();
        input.value=""

    }
    
})

function addTask(){
    let task=document.createElement("div")
    task.classList.add("task")
    task.innerHTML=`
                <i id="complete-btn" class="fa-solid fa-circle"></i>
                <p>${input.value}</p>
                <i id="delete-btn" class="fa-solid fa-trash"></i>`
    tasks.appendChild(task)
    let completeBtn=task.querySelector("#complete-btn")
    completeBtn.addEventListener("click",()=>{
        completeBtn.classList.remove("fa-circle")
        completeBtn.classList.add("fa-check")
        task.style.backgroundColor="black"
        task.style.color="white"
        console.log(tasks)
    })
    let deleteBtn=task.querySelector("#delete-btn")
        deleteBtn.addEventListener("click",()=>{
        
            removeTasks(task);
            console.log(tasks)
        })
}

const removeTasks=(task)=>{
    task.remove()
}