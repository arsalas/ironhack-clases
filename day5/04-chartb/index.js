const getData = async () => {
    try {
        const resp = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await resp.json();
        return data
    } catch (error) {
        return undefined
    }
}

const getRandomMax = (max) =>{
    return Math.floor(Math.random() * max)
}

const getRandomColor = () =>{
    const c1 = getRandomMax(255);
    const c2 = getRandomMax(255);
    const c3 = getRandomMax(255);
    return `rgb(${c1}, ${c2}, ${c3})`
}

const main = async () => {
    //const resp = await getData();
    //const data = resp.data;
    // Desestructurar 
    const { data } = await getData();
    const labels = data.map((el) => el.Year).reverse()
    console.log(labels)
    const population = data.map((el) => el.Population).reverse()
  
    // Esto es otra manera de hacer el map
    /*const data2 = [];
    for (let index = 0; index < data.length; index++) {
        data2.push(data[index].Year)

    }*/

    const dataChart = {
        labels,
        datasets: [{
            label: 'Population by year',
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
            data: population,
        }]
    };

    const config = {
        type: 'line',
        data: dataChart,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
main()


