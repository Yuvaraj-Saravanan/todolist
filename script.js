
var inp=document.getElementById("new")
var listcontainer=document.getElementById("list-container")
function update(){
    if(inp.value==""){
        alert("Enter the task")
    }
    else{
    newitem=document.createElement("li")
    newitem.innerHTML=inp.value
    listcontainer.append(newitem)
    buton=document.createElement("button")
    buton.textContent="X"
    buton.setAttribute("class","btn")
    buton.setAttribute("onclick","del(event)")
    newitem.append(buton)
    inp.value=null
    }
}
function del(event){
    event.target.parentElement.remove()
}