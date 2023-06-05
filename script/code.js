let addbtn = document.getElementById('btn-add')
let inputText = document.getElementById('addToList')
let toDo = document.getElementById('toDoList')

addbtn.addEventListener('click', function(){
    let para = document.createElement('p')
    para.innerText = inputText.value
    toDo.appendChild(para);
    inputText.value = ""
} )
par.addEventListener('click', function(){
    
    
 
})