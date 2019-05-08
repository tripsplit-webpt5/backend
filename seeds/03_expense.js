
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expense').del()
    .then(function () {
      // Inserts seed entries
      return knex('expense').truncate().insert([
        {id: 1, trip_id: 1, title: "floaties", number_paid: 2, price: 25.50, names: "Divya, Alex"},
        {id: 2, trip_id: 2, title: "noodles", number_paid: 2, price: 500, names: "Steven, Tyler"},
        {id: 3, trip_id: 2, title: "bus tickets", number_paid: 3, price: 12.00, names: "Smoot, Tyler, Patrick"}
      ]);
    });
};
