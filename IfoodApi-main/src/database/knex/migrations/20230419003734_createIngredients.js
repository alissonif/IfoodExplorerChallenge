
exports.up = knex => knex.schema.createTable('ingredients', table=>{
  table.increments('id');
  table.text('name').notNullable();
  table.integer('dish_id').references('id').inTable('dishes').onDelete('cascade').notNullable();
  table.integer('user_id').references('id').inTable('users').onDelete('cascade').notNullable();
  table.timestamp('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('ingredients', table=>{

});
