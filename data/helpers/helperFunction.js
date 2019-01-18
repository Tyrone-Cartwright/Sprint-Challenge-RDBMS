const knex = require("knex");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig.development);

const getProjects = () => {
  return db("projects");
};

const getProjectById = id => {
  const project = db("projects").where({ id: id });

  const actions = db("actions").where({ project_id: id });

  return Promise.all([project, actions]).then(results => {
    let [project, actions] = results;
    if (project.length > 0) {
      return { ...project[0], actions: actions };
    } else {
      return null;
    }
  });
};

const getActions = () => {
  return db("actions");
};

const addProject = project => {
  return db("projects").insert(project);
};

const addAction = action => {
  return db("actions").insert(action);
};

module.exports = {
  getProjects,
  getActions,
  getProjectById,
  addProject,
  addAction
};
