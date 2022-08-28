let btn = document.querySelector(".add");
let inp = document.querySelector('.input');
let dv = document.querySelector('.tasks');
displayData();

btn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(inp.value) {
       let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
       let obj = {id: Math.random(), title: inp.value};
        tasks.push(obj);
        window.localStorage.setItem('tasks',JSON.stringify(tasks));
        createTask(obj);

    }

   inp.value = '';

})

function displayData() {
    let data = JSON.parse(window.localStorage.getItem("tasks"));
    if(data) {
        data.forEach(element => {
            createTask(element);
           });
    }
}

function createTask(ele) {
    let div = document.createElement('div');
    div.classList.add('cont');

    let h4 = document.createElement("h4");
    h4.classList.add('input');
    let textNode = document.createTextNode(`${ele.title}`);
    h4.appendChild(textNode);

    let deleteBtn = document.createElement("input");
    deleteBtn.setAttribute('type', 'submit');
    deleteBtn.classList.add('add');
    deleteBtn.onclick = function() { remove(ele.id) };
    deleteBtn.setAttribute('value', 'delete');

    dv.appendChild(div);
    div.appendChild(h4);
    div.appendChild(deleteBtn);
}



function remove(id) {
    let data = JSON.parse(window.localStorage.getItem("tasks"));
    let filtered = data.filter(item => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filtered));
    location.reload();
}


