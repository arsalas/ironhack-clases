let counter = 0;


const printCounter = () => {
    document.querySelector('#counter').innerHTML = counter
}


document.querySelector('#suma').addEventListener('click', () => {
    counter++;
    printCounter();
})
document.querySelector('#resta').addEventListener('click', () => {
    counter--;
    printCounter();
})
document.querySelector('#reset').addEventListener('click', () => {
    counter = 0;
    printCounter();
})

