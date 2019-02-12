const database = require("../connection")
module.exports = {
  list() {
    return database('post_table')
  },
  create(user) {
    return database("post_table").insert(user, '*').then(record => record[0])
  },
  update(id, user) {
    return database('post_table').where('id', id).update(user, '*').then(user => user[0])
  },
  delete(id) {
    return database('post_table').where('id', id).delete()
  },
  read(id) {
    return database('post_table').where('id', id).first()
  }
}