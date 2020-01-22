exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl.integer("car_id");
  });
};

exports.down = function(knex) {};
