// Guardamos una referencia a los botones y el input
const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const clean = document.querySelector("#clean");
const list = document.querySelector('#list');

// Funcion que se ejecuta al hacer clic en new
const handleClickNew = () => {
    // Con prompt pide al usuario que escriba la tarea
    const newTodo = todo.value.trim();
    // Si el usuario no ha escrito nada paramos la funcion con return
    if (!newTodo || todo.length === 0) return;
    // Con += innerHTML agregamos al html que ya estaba el nuevo div con la tarea 
    list.innerHTML += `
        <div class="todo">
            <span>${newTodo}</span>
            <button class="btn-remove">Borrar</button>
        </div>
    `
    // Buscamos en el dom todos los elementos button que estan dentro de la class todo
    // querySelectorAll creara una array con todos los elementos que encuentre
    const todoList = document.querySelectorAll('.todo button');
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        // Agregamos el evento de click para cada boton de la lista de tareas
        element.addEventListener('click', handleClickDelete);
    }
    // Vaciamos el input
    todo.value = '';
};

// Funcion que se ejecuta al hacer clic en una tarea
// la variable event hace referencia al evento que se ha ejecutado 
// se envia automaticamente en el addEventListener
const handleClickDelete = (event) => {
    // currentTarget hace referencia al elemento del dom en el que se ha hecho clic
    const target = event.currentTarget;
    // Con parentNode nos movemos a la etiqueta html que contiene al elemento que tenemos en target
    // en este caso hacemos clic en el button y nos movemos al padre que es el div on la class todo
    target.parentNode.remove();
}

// Vacia la lista de todos
const handleClickClean = () => {
    // Mustra una ventana para que confirmemeos que queremos borrar
    const canDelete = confirm("confirm");
    // Si el usuario ha cancelado devolvera un false y detenemos la funcion con el return
    if (!canDelete) return;
    // vaciamos el html de la lista poniendo el innerHTML vacio
    document.querySelector("#list").innerHTML = '';
}

// Ejecuta la funcion handleClickNew al hacer clic el boton del add
add.addEventListener("click", handleClickNew);
// Ejecuta la funcion handleClickClean al hacer clic el boton del clean
clean.addEventListener("click", handleClickClean);

