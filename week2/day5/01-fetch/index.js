// Fetch
// fetch nos permitia pedir informacion a un servidor externo
// fetch retorna una promesa

//const promise  = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json().then(res => console.log(res)))


const getData = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(promise)
    const data = await promise.json();
    console.log(data)
    data.id
}

getData();


// Peticiones http
// GET -> pedir informacion al servidor
// POST -> enviar informacion al servidor,
// PUT -> envia informacion al servidor
// DELETE -> envia informacion al servidor e indica que se ha de borrar el recurso


const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}
// console.log(data)
// JSON.stringify convierte un objeto en texto
// console.log(JSON.stringify(data))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        message: querySelector().value,
        udser: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));