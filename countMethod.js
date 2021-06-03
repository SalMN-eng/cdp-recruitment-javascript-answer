const countData = (data) => {
  let result = [];

  data.forEach((country) => {
    let peopleRes = [];

    country.people.forEach((people) => {
      peopleRes = [...peopleRes, {
        name: `${people.name} [${people.animals.length}]`,
        animals: people.animals,
      }];
    });

    result = [...result, {
      name: `${country.name} [${country.people.length}]`,
      people: peopleRes,
    }];
  })
  return result;
};
module.exports = {countData};