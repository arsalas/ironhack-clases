let num = 4;

// debugger;
num += 6;
// debugger;

const main = async (num) => {
    try {
        debugger;

        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + num)
        console.log(resp)
    } catch (error) {
        console.log(error)
        debugger;
        alert('Vuelve a intentarlo en unos momentos')
    }
}

main(num);

