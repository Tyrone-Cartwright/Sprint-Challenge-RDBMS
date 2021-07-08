exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "MySQL",
          description: "Create a query search",
          complete: false
        },
        {
          name: "REACT",
          description: "Create a recipe app using REACT",
          complete: false
        },
        {
          name: "RDBMS",
          description: "Using SQLite3 create a DB",
          complete: false
        }
      ]);
    });
};
