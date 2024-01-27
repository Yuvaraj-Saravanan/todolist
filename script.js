
var inp=document.getElementById("new")
var listcontainer=document.getElementById("list-container")
function update(){
    newitem=document.createElement("li")
    newitem.innerHTML=inp.value
    listcontainer.append(newitem)
    buton=document.createElement("button")
    buton.textContent="X"
    buton.setAttribute("class","btn")
    buton.setAttribute("onclick","del(event)")
    newitem.append(buton)
    inp.value=null
    store()
}
function del(event){
    event.target.parentElement.remove()
    store()
}
function store(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function show(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
show()