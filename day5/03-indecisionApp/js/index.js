// Guardamos una referencia al formulario
const form = document.querySelector('#formQuestion');
// Guardamos una referencia al input
const question = document.querySelector('#question');

const getDecision = async () => {
     // OPCION A
    // Pedimos informacion al servidor
    const resp = await fetch('https://yesno.wtf/api');
    // Convertimos la informacion en un json
    const data = await resp.json();
    return data
    // OPCION B
    // return await fetch('https://yesno.wtf/api').then(resp => resp.json()) 
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(question.value);
    const decision = await getDecision();
    console.log(decision)
    document.querySelector('#h1').innerHTML = `<h1>${question.value}</h1>
    <img src="${decision.image}">
    `
})