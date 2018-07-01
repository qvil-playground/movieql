export const people = [
  { id: 0, name: "taesu", age: 27, gender: "male" },
  { id: 1, name: "kang", age: 27, gender: "male" },
  { id: 2, name: "hanule", age: 27, gender: "female" },
  { id: 4, name: "young", age: 39, gender: "male" }
];

export const getPersonById = id => people.filter(person => person.id === id)[0];
// export const getPersonById = id => {
//   const filteredPeople = people.filter(person => person.id === id);
//   console.log(filteredPeople);
//   return filteredPeople[0];
// };
