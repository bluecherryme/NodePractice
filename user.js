var user = {
  name: 'Jo Krill',
  location: 'Nowhere',
  occupations: ['gardener','Secret Agent', 'dog walker'],
  hobbies: [
    {
      name: 'golf',
      type: 'outdoors'
    },
    {
      name: 'reading',
      type: 'indoors'
    },
    {
      name: 'hunting',
      type: 'indoors'
    }
  ],
  family: [
    {
      name: 'Pina',
      relation: 'sister',
      gender: 'female'
    },
    {
      name: "Dew",
      relation: 'half-bro',
      gender: 'male'
    },{
      name: "Mum",
      relation: 'mum',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: "Burger King",
      type: 'fast food',
      rating: 2
    },
    {
      name: 'Sausalidos',
      type: 'spanish',
      rating: 7
    },
    {
      name: 'Pizza',
      type: 'pizza',
      rating: 5
    }
  ]
};

module.exports = user;