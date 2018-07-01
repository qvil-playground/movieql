const qvil = {
  name: "Taesu",
  age: 27,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => qvil
  }
};

export default resolvers;
