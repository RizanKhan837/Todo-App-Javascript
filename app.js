/* var user = prompt("Enter Username")
document.write("Hello World ", user) */


var input = document.querySelector(".input-list")
var addBtn = document.getElementById("submit")
var tasks = document.querySelector(".tasks")

var list  = document.getElementById('list');

var arr = [];


function addTodo() {
    // create li tag with text node
    if (input.value.trim() != "") {
        //deleteItem(list)

        let newItem = document.createElement('div')
        newItem.classList.add('item')
        /* var object = document.createElement('object')
        var liText = document.createTextNode(input.value)
        object.appendChild(liText) */

        var object = {  
            todo: input.value,
            isCompleted: false
        }

        arr.push(object);
        let b = arr.filter(x => x.todo == "todo") // Shortest Way
        let array = arr.map((e) => {
            return e;
        })
        console.log(array)
        //console.log(b); 
        // list.appendChild(object
        newItem.innerHTML = `<p> ${object.todo} </p>
        <div class = "item-btn">
            <i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i>
            <i class="fa-solid fa-xmark" onclick="deleteItem(this)"></i>
        </div>`
        tasks.appendChild(newItem)

        input.value = "";
    }else{
        alert("Input Task First")
    }

    /* let newItem = document.createElement('div')
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

    tasks.appendChild(newItem) */

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

    //console.log(object);
}


function filter(){
    var val = prompt("Enter Value");
    let b = arr.filter(x => x.todo == val) // Shortest Way
    deleteAll()
    b.forEach(element => {
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `<p> ${element.todo} </p>
        <div class = "item-btn">
            <i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i>
            <i class="fa-solid fa-xmark" onclick="deleteItem(this)"></i>
        </div>`
        tasks.appendChild(newItem)
    });
    document.getElementById("filter").style.display = "none";  //hide
	document.getElementById("unfilter").style.display = "block"; //show
}

function unfilter(){
    deleteAll()
    arr.forEach(element => {
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `<p> ${element.todo} </p>
        <div class = "item-btn">
            <i class="fa-solid fa-pen-to-square" onclick="editItem(this)"></i>
            <i class="fa-solid fa-xmark" onclick="deleteItem(this)"></i>
        </div>`
        tasks.appendChild(newItem)
    });
    document.getElementById("unfilter").style.display = "none";  //hide
	document.getElementById("filter").style.display = "block"; //show
}

function editItem(e) {
    var newItem = prompt("Enter New Value");
    console.log(e.parentNode.parentNode.firstChild);
    e.parentNode.parentNode.firstChild.innerHTML =  `${newItem}`;
    //console.log(e.parentNode.parentNode.firstChild.value);
}

function deleteItem(e) {
    e.parentNode.parentNode.remove();
    let index = arr.indexOf(e.value);
    arr.splice(index, 1);
}

function deleteAll() {
    tasks.innerHTML = "";
}