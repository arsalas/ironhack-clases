// Iteration 1
describe('Function "getAllDirectors"', () => {
  it('should be declared', () => {
    expect(typeof getAllDirectors).toBe('function');
  });

  it('should return an array', () => {
    expect(getAllDirectors(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    const returnValue = getAllDirectors(movies);
    expect(returnValue instanceof Array).toBe(true);        
    expect(getAllDirectors(movies)).not.toEqual(movies);
  });

  it('should return a new array with the same length as the original one', () => {
    const testArr = [
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ];
    expect(getAllDirectors(testArr)).toEqual([
      'Stanley Kubrick',
      'Quentin Tarantino'
    ]);
  });
});

// Iteration 2

describe('Function "howManyMovies"', () => {
  it('should be declared', () => {
    expect(typeof howManyMovies).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof howManyMovies(movies)).toBe('number');
  });

  it('should return 0 if the array is empty', () => {
    expect(howManyMovies([])).toBe(0);
  });

  it('should return 0 if none of the movies in the array were directed by Steven Spielberg', () => {
    expect(
      howManyMovies([
        {
          director: 'James McTeigue',
          genre: ['Action', 'Drama', 'Thriller']
        }
      ])
    ).toBe(0);
  });

  it('should only count drama movies', () => {
    expect(
      howManyMovies([
        {
          director: 'Steven Spielberg',
          genre: ['Action', 'Drama', 'Thriller']
        },
        {
          director: 'Steven Spielberg',
          genre: ['Action']
        }
      ])
    ).toBe(1);
  });

  it('should return 2 if there are only 2 Steven Spielberg movies', () => {
    expect(
      howManyMovies([
        {
          director: 'Steven Spielberg',
          genre: ['Action', 'Drama', 'Thriller']
        },
        {
          director: 'James McTeigue',
          genre: ['Action', 'Drama']
        },
        {
          director: 'Karl Moses',
          genre: ['Thriller', 'Drama']
        },
        {
          director: 'Steven Spielberg',
          genre: ['Drama', 'Thriller']
        }
      ])
    ).toBe(2);
  });

  it('should return 4 when called with the array of movies exported from "data.js"', () => {
    expect(howManyMovies(movies)).toBe(4);
  });
});

// Iteration 3
describe('Function "scoresAverage"', () => {
  it('should be declared', () => {
    expect(typeof scoresAverage).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof scoresAverage(movies)).toBe('number');
  });

  it(' should return the average score of 2 movies with score 8 each', () => {
    expect(scoresAverage([{ score: 8 }, { score: 8 }])).toBe(8);
  });

  it('should be rounded to 2 decimals places', () => {
    expect(scoresAverage([{ score: 8 }, { score: 9 }, { score: 9 }])).toBe(
      8.67
    );
  });

  it('should return 0 if an empty array is passed', () => {
    expect(scoresAverage([])).toBe(0);
  });

  it('should return average even if one of the movies does not have score', () => {
    expect(scoresAverage([{ score: 6 }, { score: '' }, {}])).toBe(2);
  });
});

// Iteration 4
describe('Function "dramaMoviesScore"', () => {
  it('should be declared', () => {
    expect(typeof dramaMoviesScore).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof dramaMoviesScore(movies)).toBe('number');
  });

  it('should return the score of a single element array', () => {
    expect(dramaMoviesScore([{ genre: ['Drama'], score: 8 }])).toBe(8);
  });

  it('should return the average of the rating of the drama movies in the array', () => {
    expect(
      dramaMoviesScore([
        { genre: ['Drama'], score: 8 },
        { genre: ['Drama'], score: 9 },
        { genre: ['Drama'], score: 7 }
      ])
    ).toBe(8);
  });

  it('should return the average of the array, a floating point number', () => {
    expect(
      dramaMoviesScore([
        { genre: ['Drama'], score: 9 },
        { genre: ['Drama'], score: 9 },
        { genre: ['Drama'], score: 7 }
      ])
    ).toBe(8.33);
  });

  it('should only calculate the average for drama movies', () => {
    expect(
      dramaMoviesScore([
        { genre: ['Drama'], score: 8 },
        { genre: ['Romance'], score: 9 },
        { genre: ['Drama'], score: 7 }
      ])
    ).toBe(7.5);
  });

  it('should return 0 if there is no Drama movie', () => {
    expect(
      dramaMoviesScore([
        { genre: ['Action'], score: 8 },
        { genre: ['Romance'], score: 9 },
        { genre: ['Sci-Fi'], score: 7 }
      ])
    ).toBe(0);
  });
});

// Iteration 5
describe('Function "orderByYear"', () => {
  it('should be declared', () => {
    expect(typeof orderByYear).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderByYear(movies)).toBe('object');
  });

  it('should return a new array, not mutate the original one', () => {
    const arr = [];
    const returnValue = orderByYear(arr);
    expect(returnValue instanceof Array).toBe(true);    
    expect(orderByYear(arr)).not.toBe(arr);
  });

  it('should return the element in a single element array', () => {
    expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
  });

  it('should return the new array in ascending order', () => {
    expect(
      orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
    ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
  });

  it('should order movies with the same year by their title, alphabetically', () => {
    expect(
      orderByYear([
        { title: 'abc', year: 2002 },
        { title: 'bac', year: 1982 },
        { title: 'aab', year: 1982 }
      ])
    ).toEqual([
      { title: 'aab', year: 1982 },
      { title: 'bac', year: 1982 },
      { title: 'abc', year: 2002 }
    ]);
  });
});

// Iteration 6
describe('Function "orderAlphabetically"', () => {
  it('should be declared', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('should return a new array, not mutate the original one', () => {
    const arr = [{ title: 'xyz' }, { title: 'abc' }];
    const returnValue = orderAlphabetically(arr);
    expect(returnValue instanceof Array).toBe(true);
    expect(orderByYear(arr)).not.toBe(arr);    
  });

  it('should only return the title of the movies, each value should be a string', () => {
    expect(typeof orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('should return all of items when the array passed has fewer than 20 items', () => {
    const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];
    expect(orderAlphabetically(moviesArr).length).toBe(3);
  });

  it('If there are more than 20 elements, return only 20 of them.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' }
    ];
    expect(orderAlphabetically(moviesArr).length).toBe(20);
  });

  it('should order them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'aaa' },
      { title: 'abc' },
      { title: 'acb' },
      { title: 'abb' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'abb',
      'abc',
      'acb'
    ]);
  });

  it('should return the top 20 after ordering them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aaa' },
      { title: 'bbb' },
      { title: 'anc' },
      { title: 'kns' },
      { title: 'zds' },
      { title: 'pow' },
      { title: 'gda' },
      { title: 'res' },
      { title: 'ter' },
      { title: 'bca' },
      { title: 'ccc' },
      { title: 'bbt' },
      { title: 'qas' },
      { title: 'kmn' },
      { title: 'frt' },
      { title: 'afb' },
      { title: 'agb' },
      { title: 'apo' },
      { title: 'poa' },
      { title: 'cdf' },
      { title: 'sea' },
      { title: 'lom' },
      { title: 'acs' },
      { title: 'qas' },
      { title: 'mns' },
      { title: 'bvc' },
      { title: 'gha' },
      { title: 'lkj' },
      { title: 'era' },
      { title: 'ert' },
      { title: 'tex' },
      { title: 'zas' },
      { title: 'pol' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'acb',
      'acs',
      'afb',
      'agb',
      'anc',
      'apo',
      'bab',
      'bbb',
      'bbt',
      'bca',
      'bvc',
      'ccc',
      'cdf',
      'era',
      'ert',
      'frt',
      'gda',
      'gha'
    ]);
  });
});

// ******************************************************************************************
// *************************************** BONUS ********************************************
// ******************************************************************************************

// Iteration 7
describe('Function "turnHoursToMinutes"', () => {
  it('should be declared', () => {
    expect(typeof turnHoursToMinutes).toBe('function');
  });

  it('should return an array', () => {
    expect(turnHoursToMinutes(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not mutate the original one', () => {
    const returnValue = turnHoursToMinutes(movies);
    expect(returnValue instanceof Array).toBe(true);
    expect(turnHoursToMinutes(movies)).not.toBe(movies);    
  });

  it('should return an array of movies with duration as a number', () => {
    expect(typeof turnHoursToMinutes(movies)[0].duration).toBe('number');
  });

  it('should return an array of movies with the correct duration for a 31 minute movie', () => {
    const movieTry = [{ duration: '0h 31min' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return an array of movies with the correct duration for a 341 minute movie', () => {
    const movieTry = [{ duration: '5h 41min' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return an array of movies with the correct duration for a 2 hour movie', () => {
    const movieTry = [{ duration: '2h' }];
    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(120);
  });
});

// Iteration 8
describe('Function "bestYearAvg"', () => {
  it('should be declared', () => {
    expect(typeof bestYearAvg).toBe('function');
  });

  it('should return null if the array is empty', () => {
    expect(bestYearAvg([])).toBe(null);
  });

  it('should return the correct answer to a single element array', () => {
    expect(bestYearAvg([{ year: 2007, score: 8 }])).toEqual(
      'The best year was 2007 with an average score of 8'
    );
  });

  it('should return the correct answer to a multiple elements array', () => {
    expect(bestYearAvg(movies)).toEqual(
      'The best year was 1972 with an average score of 9.2'
    );
  });

  it('should return the oldest year when there is a tie', () => {
    const newMoviesArr = [
      { year: 2000, score: 9 },
      { year: 2000, score: 8 },
      { year: 1978, score: 10 },
      { year: 1978, score: 7 }
    ];

    expect(bestYearAvg(newMoviesArr)).toEqual(
      'The best year was 1978 with an average score of 8.5'
    );
  });
});
