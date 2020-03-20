const db = require('../data/db-config.js')

module.exports = {
  all,
  findById,
  findSteps,
  add,
  update,
  remove
}

function all(){ 
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps')
    .where({ 'schemes.id': id })
    .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
    .orderBy('steps.step_number')
    .select( 'steps.id', 
      'schemes.scheme_name', 
      'steps.step_number', 
      'steps.instructions' );
}

function add(scheme) {
  return db('schemes')
  .select('schemes')
  .insert(scheme);
}


function update(changes, id) {
  return db('schemes')
  .where({ id })
  .update(changes);
}

function remove(id) {
  return db('schemes')
  .where({ id })
  .del()
}

// remove(id):
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.


