exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_table').insert([
        {
        heading: 'heading1',
        subHeading: 'subheading 1',
        date: 'date1',
        imageURL: 'image URL',
        paragraph1: 'paragraph 1',
        paragraph2: 'paragraph 2',
        paragraph3: 'paragraph 3',
        paragraph4: 'paragraph 4',
        paragraph5: 'paragraph 5',
        paragraph6: 'paragraph 6',
        paragraph7: 'paragraph 7',
        paragraph8: 'paragraph 8',
        paragraph9: 'paragraph 9',
        paragraph10: 'paragraph 10',
      }, 
      {
        heading: 'heading1',
        subHeading: 'subheading 1',
        date: 'date2',
        imageURL: 'image URL',
        paragraph1: 'para 1',
        paragraph2: 'para 2',
        paragraph3: 'para 3',
        paragraph4: 'para 4',
        paragraph5: 'para 5',
        paragraph6: 'para 6',
        paragraph7: 'para 7',
        paragraph8: 'para 8',
        paragraph9: 'para 9',
        paragraph10: 'para 10',
      }
    ]);
    });
};