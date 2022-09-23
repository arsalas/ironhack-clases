// Guardamos una referencia al formulario
const form = document.querySelector('#formQuestion');
// Guardamos una referencia al input
const question = document.querySelector('#question');
const container = document.querySelector('#container');
const content = document.querySelector('#content')
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
    // Validamos que haya texto en el input
    const questionValue = question.value.trim();
    if (questionValue.length === 0) return ;
    if (questionValue.charAt(questionValue.length - 1) != '?') return;
    const decision = await getDecision();
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)), 
    url(${decision.image})`;
    let html = `<h1>${question.value}</h1>`;
    html += `<h1 class="decision">${decision.answer}</h1>`;
    content.innerHTML = html;
    question.value = '';
})