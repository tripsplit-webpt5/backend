
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').truncate()
      .insert([
        {id: 1, username: 'lambda', password: '$2a$04$bXrBrDlF.2cTgMyalUZTEutiG8EKxXanrgh5BL00d4dA9yCeBIMHe'}
      ]);
    });
};
