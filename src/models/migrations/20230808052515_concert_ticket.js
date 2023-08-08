/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("concert_ticket", (table) => {
    table.increments("id").primary();
    table.string("concert_name");
    table.integer("qty");
    table.integer("price");
    table.date("date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("concert_ticket");
};
