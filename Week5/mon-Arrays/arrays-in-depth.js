// for of loops

let bMovies = [
  "Troll 2",
  "Samurai Cop",
  "The Blob",
  "Manos: The hands of Fate",
];
// look, Ma, no indexes!`
for (let movie of bMovies) {
  console.log(movie);
}

for (let movieIndex = 0; movieIndex < bMovies.length; movieIndex++) {
  let movie = bMovies[movieIndex];
  console.log(movie);
}

//forEach
bMovies.forEach((movie) => console.log(movie));

//find
console.log(bMovies.find((movie) => movie.length > 10));

//filter - filter in (what we want to keep) vs filter out
console.log(bMovies.filter((movie) => movie.length < 10));

// map - for each item in the list, modify it in this way and replace
console.log(bMovies.map((movie) => `${movie} is a b movie`));

// chaining
bMovies.map((movie) => `1 ${movie}`).filter((x) => x < 10);

//mdn reduce example - simple way to use reduce as "accumulator function"
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const reduceFunction = (total, currentIndexValue) => total + currentIndexValue;
// accumulator = 0, currentValue = 1
// accumulator = 1, currentValue = 2
// total = 3, currentValue = 3
// total = 6, currentValue = 4
// final total = 10

const sumWithInitial = array1.reduce(reduceFunction, initialValue);

console.log(sumWithInitial);
