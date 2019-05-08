
exports.up = function(knex, Promise) {
  return knex.schema.createTable("expense", function(expense) {
    expense.increments();
    expense
      .string("title", 128)
      .notNullable()
      .unique();
    expense
      .integer("trip_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("trips");
    expense
      .integer("number_paid")
      .unsigned()
      .defaultTo(0)
    expense
      .integer("price")
      .unsigned()
      .notNullable()
    expense
      .string("names")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expense");
};
