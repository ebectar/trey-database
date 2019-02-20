const database = require("../connection")
module.exports = {
  list() {
    return database('post_table')
  },
  create(post) {
    return database('post_table').insert(post, '*')
  },
  update(id, post) {
    return database('post_table').where('id', id).update(post, '*').then(post => post[0])
  },
  delete(id) {
    return database('post_table').where('id', id).delete()
  },
  read(id) {
    return database('post_table').where('id', id).first()
  }
}