// Guardamos una referencia al formulario
const form = document.querySelector('#formQuestion');
// Guardamos una referencia al input
const question = document.querySelector('#question');
// Guardamos una referencia al id container
const container = document.querySelector('#container');
// Guardamos una referencia al id content
const content = document.querySelector('#content')

// Funcion para perdir informacion a la api de yesno
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
    // Detenemos el envio del formulario
    e.preventDefault();
    // Quitamos los espacios del principio y el final del input
    const questionValue = question.value.trim();
    // Validamos que haya texto en el input
    if (questionValue.length === 0) return ;
    // Validamos que el texto tenga un ?
    if (questionValue.charAt(questionValue.length - 1) != '?') return;
    // Obtenemos la informacion de la decision
    const decision = await getDecision();
    // Ponemos la imagen en el css con js
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)), 
    url(${decision.image})`;
    // Creamos una variable con el texto del titulo y la decision
    let html = `<h1>${question.value}</h1>`;
    html += `<h1 class="decision">${decision.answer}</h1>`;
    // Escribimos en el html los h1
    content.innerHTML = html;
    // Vaciamos el input del formulario
    question.value = '';
})