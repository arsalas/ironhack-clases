const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
    // ... your code goes here
    printMinutes();
    printSeconds();
}

function printMinutes() {
    // ... your code goes here
    const min = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
    const arr = min.split('');
    minDecElement.innerHTML = arr[0];
    minUniElement.innerHTML = arr[1];
}

function printSeconds() {
    // ... your code goes here
    const sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
    const arr = sec.split('');
    secDecElement.innerHTML = arr[0];
    secUniElement.innerHTML = arr[1];

}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
}

function printSplit() {
    // ... your code goes here
    splitsElement.innerHTML += `<li class="list-item">${chronometer.split()}</li>`
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    // ... your code goes here
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.innerHTML = 'STOP'
}

function setSplitBtn() {
    // ... your code goes here
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT'
}

function setStartBtn() {
    // ... your code goes here
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
    // ... your code goes here
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    // ... your code goes here
    // Comprobamos si tiene la clase stop
    if (btnLeftElement.classList.value.split(' ').includes('stop')) {
        setStartBtn();
        setResetBtn();
        chronometer.stop();
        return;
    }
    setStopBtn();
    setSplitBtn();
    // pasar la funcion que pinta el tiempo en el html como callback
    chronometer.start(printTime);
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here
    if (btnRightElement.classList.value.split(' ').includes('reset')) {
        chronometer.reset();
        printTime();
        return;
    }
    printSplit();
   
});
