const filterData = (data, filter) => {
  let result = [];
  data.forEach((country) => {
  
    let peopleRes = [];
    country.people.forEach((people) => {
      const animalsRes = people.animals.filter((animal) => animal.name.includes(filter));

      if (animalsRes.length > 0) {
        peopleRes = [...peopleRes, {
          name: `${people.name}`,
          animals: animalsRes,
        }];
      }
    });

    if (peopleRes.length > 0) {
      result = [...result, {
        name: `${country.name}`,
        people: peopleRes,
      }];
    }
  })
  return result;
};
module.exports = {filterData}