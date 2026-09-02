/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {id: 1, title: 'rowValue1', main_character: '', year_released: ''},
    {id: 2, title: 'rowValue2', main_character: '', year_released: ''},
    {id: 3, title: 'rowValue3', main_character: '', year_released: ''}
  ]);
};
