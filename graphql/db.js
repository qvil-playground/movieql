export const people = [
  { id: 0, name: "taesu", age: 27, gender: "male" },
  { id: 1, name: "kang", age: 27, gender: "male" },
  { id: 2, name: "hanule", age: 27, gender: "female" },
  { id: 4, name: "young", age: 39, gender: "male" }
];

export let movies = [
  { id: 1, name: "Avengers - The new one", score: 90 },
  { id: 2, name: "Step up 1", score: 90 },
  { id: 3, name: "Step up 2", score: 85 },
  { id: 4, name: "Step up 3", score: 80 }
];

export const getPersonById = id => people.filter(person => person.id === id)[0];
// export const getPersonById = id => {
//   const filteredPeople = people.filter(person => person.id === id);
//   console.log(filteredPeople);
//   return filteredPeople[0];
// };

export const getMovies = () => movies;
export const getMovieById = id => moviews.filter(movie => movie.id === id)[0];

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };

  movies.push(newMovie);

  return newMovie;
};
