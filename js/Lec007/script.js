const form = document.todo;

const lst = document.querySelector('#list');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    let listItem  = document.createElement('li');
    listItem.innerText = document.todo.txt.value;
    listItem.classList.add('lis');
    lst.appendChild(listItem);
    document.todo.txt.value = "";
})
const lists = document.querySelector('.lis');
lists.addEventListener('click',completeTask);
function completeTask(element) {
    element.classList.add("completed");

}
