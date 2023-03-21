const fruits = ['apple', 'banana', 'cantaloupe', 'durian', 'pineapple'];

// Long way:
{
  const favoriteFruit = fruits[0];
  const secondFavoriteFruit = fruits[1];
  const thirdFavoriteFruit = fruits[2];
}

// Short way:
{
  const [favoriteFruit, secondFavoriteFruit, thirdFavoriteFruit] = fruits;
}



// Sometimes, the position of the item in an array tells you something about what type of thing it is.
// Destructuring is useful in these situations to succinctly give predictable names to each value.
const address = ['Canada', 'British Columbia', 'Vancouver', 'Granville Ave.', '1234'];

// Long way:
{
  const country = address[0];
  const province = address[1];
  const city = address[2];
}

// Short way:
{
  const [country, province, city, street, building] = address;
}
