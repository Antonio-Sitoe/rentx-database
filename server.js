module.exports = () => {
  const data = {
    friends: [],
  };
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  for (let index = 0; index < 100; index++) {
    data.friends.push({
      id: index + 1,
      name:
        getRandomArbitrary(5, 30) > 15
          ? "Antonio " + index + 1
          : "Gilberto " + index + 1,
      likes: getRandomArbitrary(5, 30),
    });
  }
  return data;
};
