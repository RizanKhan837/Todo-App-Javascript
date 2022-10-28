/* var user = prompt("Enter Username")
document.write("Hello World ", user) */
var list = document.getElementById("list");

function addTodo() {
    //create li tag with text node
    var todoItem = document.getElementById("todo_Item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText);
    
    //create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")

    // create delete button
    var deleteBtn = document.createElement("button")
    var deleteText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteText);
    deleteBtn.setAttribute("onclick", "deleteItem(this)")
    deleteBtn.setAttribute("class", "btn")


    list.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoItem.value = "";

    console.log(li);
}

function editItem(e) {
    var newItem = prompt("Enter New Value ");
    e.parentNode.firstChild.nodeValue = newItem;
}
function deleteItem(e) {
    e.parentNode.remove();
}
function deleteAll() {
    list.innerHTML = "";
}