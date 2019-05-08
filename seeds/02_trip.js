
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').truncate().insert([
        {
          id: 1, 
          title: 'Beach Vacay', 
          user_id: 1, 
          number_travelers: 3, 
          destination: "Santa Cruz", 
          dates: "june 2019-july 2019", 
          names: "Tenzing, Alex, Divya" 
      },
        {
          id: 2, 
          title: 'Noodles in Italy', 
          user_id: 1, 
          number_travelers: 4, 
          destination: "Rome", 
          dates: "june 2019-july 2019", 
          names: "Smoot, Patrick, Steven, Tyler"
      }
      ]);
    });
};
