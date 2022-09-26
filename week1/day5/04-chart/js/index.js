

const getData = async () => {
    try {
        const resp = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await resp.json();
        return data
    } catch (error) {
        return undefined
    }
}

const getRandomByMax = (max) => Math.floor(Math.random() * max);

const getRandomColor = () => {
    const c1 = getRandomByMax(255);
    const c2 = getRandomByMax(255);
    const c3 = getRandomByMax(255);
    return `rgb(${c1}, ${c2}, ${c3})`;
}

const main = async () => {

    const { data } = await getData();

    const color = getRandomColor()
    const data2 = {
        labels: data.map((el) => el.Year).reverse(),
        datasets: [{
            label: 'Population',
            backgroundColor: color,
            borderColor: color,
            data: data.map((el) => el.Population).reverse(),
        }]
    };

    const config = {
        type: 'line',
        data: data2,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


window.onload = () => main()
