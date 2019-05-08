
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trips", function(trips) {
    trips.increments();
    trips
      .string("title", 128)
      .notNullable()
      .unique();
    trips
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete('CASCADE');
    trips
      .integer("number_travelers")
      .unsigned()
      .defaultTo(0)
    trips
      .string("destination", 128)
      .notNullable()
    trips
      .string("dates")
    trips
      .string("names")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trips");
};
