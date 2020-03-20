const db = require('../data/db-config.js')

module.exports = {
  all,
  findById,
}

function all(){ 
  return db('users');
}

function findById(id) {
  
}