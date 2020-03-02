exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('songs', tbl => {
      tbl.increments();
      tbl.string('song_name', 128)
        .notNullable();
      tbl.string('artist_name', 128)
        .notNullable();
     tbl.integer('duration', 128)
        .unsigned();
     tbl.string('genre', 128);
     tbl.string('song_url', 128);

    })
    // we can chain together createTable
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128)
      .notNullable()
      .unique();
      tbl.string('password', 128)
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('songs');
    
};
