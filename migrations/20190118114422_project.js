exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    // Primary Key
    tbl.increments();

    // Name
    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    // Description
    tbl.text("description", "longtext");

    // Project complete
    tbl.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
