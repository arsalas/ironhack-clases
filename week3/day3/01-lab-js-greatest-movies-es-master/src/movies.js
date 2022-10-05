// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(movie => {
        return movie.director
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // console.log(moviesArray)
    // Si la array esta vacia
    if (moviesArray.length == 0) return 0;
    const newArray = moviesArray.filter(movie => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) return true
    })
    return newArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;
    const sum = moviesArray.reduce((prev, curr) => {
        if (curr.score) {
            return prev + curr.score;
        }
        return prev;
    }, 0)
    const average = sum / moviesArray.length;
    return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie => {
        if (movie.genre.includes('Drama')) return true
    })
    return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // Duplico la array
    const newArray = [...moviesArray];
    newArray.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            }
            return -1
        }
        return a.year - b.year
    })
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray.map(movie => movie.title)
    newArray.sort((a, b) => {
        if (a > b) return 1
        return -1
    })

    // Si la array tiene mas de 20 peliculas
    if (newArray.length > 20) {
        const arr = [];
        // Guardamos las primeras 20 peliculas
        for (let i = 0; i < 20; i++) {
            const element = newArray[i];
            arr.push(element)
        }
        return arr;
    }

    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const newArray = moviesArray.map(movie => {
        // Eliminamos el texto de h y min
        let duration = movie.duration.replace('h', '');
        duration = duration.replace('min', '');
        // Convertimos en array por numeros donde tenemos en 0 las horas y en min los minutos 
        duration = duration.split(' ');
        // Convertir las horas en numero y pasar a minutos
        duration[0] = parseInt(duration[0]) * 60;
        let minDuration;
        // Comprobar si la pelicula tiene min
        if (duration[1]) {
            // Convertimos los min en numero y los sumamos a las horas
            duration[1] = parseInt(duration[1])
            minDuration = duration[0] + duration[1];
        } else {
            // si no tiene min nos quedamos solo con los min de la h
            minDuration = duration[0];
        }
        // duplicamos el objeto para que no sea una copia y cambiamos la duracion por los minutos
        return {
            ...movie,
            duration: minDuration
        };
    })
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length == 0) return null;
    // const average = {
    //     "2000": {
    //         score: 10,
    //         total: 2
    //     }
    // };
    const average = {}
    moviesArray.map(movie => {
        if (average[movie.year]){
            average[movie.year].score += movie.score;
            average[movie.year].total++;
        } else {
            average[movie.year] = {
                score: movie.score,
                total: 1
            }
        }
    })
    console.log(average)
    // Recorrer el objeto
    let year;
    let avg;

    for(const key in average){
        // Primera iteracion, guardamos el primer valor
        let avgYear = average[key].score / average[key].total;
        if (year === undefined){
            year = key
            // Accedemos al score del year y lo dividimos por todas las peliculas
            avg = avgYear;
        }
        // Comprobamos si el year actual es superior al que teniamos
        if (avgYear > avg){
            // Reemplazamos los valores maximos
            year = key;
            avg = avgYear;
        }
    }
    return `The best year was ${year} with an average score of ${avg}`
}
