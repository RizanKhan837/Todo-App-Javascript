/* var user = prompt("Enter Username")
document.write("Hello World ", user) */


var input = document.querySelector(".input-list")
var addBtn = document.getElementById("submit")
var tasks = document.querySelector(".tasks")


function addTodo() {
    //create li tag with text node
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    var object = document.createElement('object')
    var liText = document.createTextNode(input.value)
    object.appendChild(liText)
    //list.appendChild(object
    newItem.innerHTML = `<p> ${input.value} </p>
    <div class = "item-btn">
            <i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i>
            <i class="fa-solid fa-xmark" onclick="deleteItem(this)"></i>
    </div>`

    tasks.appendChild(newItem)

    /* var todoItem = document.getElementById("todo_Item");
    var object = document.createElement("object");
    var liText = document.createTextNode(todoItem.value);
    object.appendChild(liText); */
    
    // create edit button
    /* var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class", "btn");
    editBtn.setAttribute("onclick", "editItem(this)"); */

    // create delete button
    /* var deleteBtn = document.createElement("button");
    var deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    deleteBtn.setAttribute("onclick", "deleteItem(this)");
    deleteBtn.setAttribute("class", "btn"); */

    /* list.appendChild(object); */
    /* li.appendChild(editBtn);
    li.appendChild(deleteBtn); */
    input.value = "";

    console.log(object);
}

function editItem(e) {
    var newItem = prompt("Enter New Value ");
    e.parentNode.firstChild.nodeValue = newItem;
}

function deleteItem(e) {
    e.parentNode.firstChild.remove();
}

function deleteAll() {
    list.innerHTML = "";
}