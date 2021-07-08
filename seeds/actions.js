exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "MySQL",
          notes: "Check training kit",
          complete: false
        },
        {
          project_id: 1,
          description: "REACT",
          notes: "Review old project",
          complete: false
        },
        {
          project_id: "2",
          description: "Meditate",
          notes: "Do not forget to breathe",
          complete: false
        },
        {
          project_id: "2",
          description: "Fitness",
          notes: "Go to the gym",
          complete: false
        },
        {
          project_id: "3",
          description: "Cook dinner",
          notes: "Go grocery shopping",
          complete: false
        },
        {
          project_id: "3",
          description: "Nap",
          notes: "Go to sleep",
          complete: false
        }
      ]);
    });
};
