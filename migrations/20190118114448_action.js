exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    // Primary Key
    tbl.increments();

    // Description
    tbl.text("description");

    // Notes
    tbl.text("notes");

    // Action complete
    tbl.boolean("complete").defaultTo(false);

    // Relationship
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
