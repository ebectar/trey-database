
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_table', table => {
    table.increments('id')
    table.text('heading')
    table.text('subHeading')
    table.date('date')
    table.text('imageURL')
    table.text('paragraph1')
    table.text('paragraph2')
    table.text('paragraph3')
    table.text('paragraph4')
    table.text('paragraph5')
    table.text('paragraph6')
    table.text('paragraph7')
    table.text('paragraph8')
    table.text('paragraph9')
    table.text('paragraph10')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post_table')
};