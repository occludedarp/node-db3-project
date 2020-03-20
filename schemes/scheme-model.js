const db = require('../data/db-config.js')

module.exports = {
  all,
  findById
}

function all(){ 
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}


