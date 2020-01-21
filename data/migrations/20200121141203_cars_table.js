exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments().notNullable();
    tbl
      .string("make")
      .index()
      .notNullable();
    tbl
      .string("model")
      .index()
      .notNullable();
    tbl.string("vin", 40).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission_type").nullable();
    tbl.string("status_of_title").nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
