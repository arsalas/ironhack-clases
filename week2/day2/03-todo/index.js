// 1 - Guardar las referencias de los id en variables con querySelector
// 2 - Poner los eventListeners a los botones
// 3 - Definir una funcion de las funciones que llaman los listener
// 4 - Implementar la funcionalidad del evento de nueva tarea
// 4.1 - Recibir el valor del input y validar que tenga texto
// 4.2 - Incluir en html en dom
// 4.3 - Itrerar la lista y de cada elemento incluir el addEventListener del clic del boton
// 4.4 - Definir la funcion de borrar el elemento
// 4.5 - Implementar la funcion que borra el elemento de la lista seleccionado
// 5. - Implementar la funcionalidad de vaciar la lista

// Guardarme una referencia al nodo de los id
const todo = document.querySelector('#todo');
const add = document.querySelector('#add');
const clean = document.querySelector('#clean');
const list = document.querySelector('#list');

// Borrar la tarea
const handleClickDelete = (event) => {
    // event.currentTarget me da el nodo en el que se ha hecho clic
    const node = event.currentTarget;
    console.log(node);
    const parent = node.parentNode;
    parent.remove();
    // node.parentNode.remove()
}

const handleClick = (event) => {
    // preventDefault() detiene el evento, el caso de un submit detiene la carga de la pagina
    event.preventDefault();
    // let string = '       hola mundo    '
    // trim convierte la string en 'hola mundo'
    const newTodo = todo.value.trim();
    // Si el input esta vacia no hacemos nada y terminamos la funcion con return
    if (newTodo.length === 0) return;
    // Agregamos al final del html el nuevo html con la tarea
    list.innerHTML += `
    <div class="todo">
        <span>${newTodo}</span>
        <button class="btn-remove">Borrar</button>
    </div>`;

    const todoList = document.querySelectorAll('.todo button');
    // document.querySelectorAll('.btn-remove');
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        element.addEventListener('click', handleClickDelete);
    }

    // Vaciamos el contenido del input
    todo.value = '';
}

const handleClickClean = () => {
    // Nos pide confirmacion, retorna true si aceptas y false si rechazas
    const canDelete = confirm('Estas seguro que quieres vaciar la lista?')
    if (canDelete == false)
        return;
    list.innerHTML = ''
}

// Escuchamos los eventos de clic en el nodo con el id add
add.addEventListener('click', handleClick);

// Cuando hagamos clic en el nodo con el id clean llamaremos a la funcion handleClickClean
clean.addEventListener('click', handleClickClean)

document.querySelector('form').addEventListener('submit',handleClick)

/*
const handleLi = (event) => {
    console.log(event.currentTarget)
    alert('num')
}

const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.addEventListener('click', handleLi)
}
*/